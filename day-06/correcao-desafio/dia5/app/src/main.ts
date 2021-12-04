import './style.css'
import { get, post, del } from './http'

const url = 'http://localhost:3333/cars'
const form = document.querySelector<HTMLFormElement>('[data-js="cars-form"]')!
// Usando a string/palavra da tag/element do html no querySelector, o typescrpit consegue inferer o tipo do Element esperado.
// const form2 = document.querySelector('form')

// Quando selecionamos elementos do html, Typescript vai dizer Object is possibly 'null'
// Isso acontece por ter informado o seletor errado ou realmente o element não e o
// queryElement não conseguiu encontrar a referência.

// Outra maneira de tratar form null sem utilização do !
// if(!form) {
//   throw new Error('Mano, cade o form?')
// }

const table = document.querySelector<HTMLTableElement>('[data-js="table"]')!

// type GetFormElement = (target: HTMLFormElement) => 
//   <T extends HTMLInputElement>(elementName: string) => T

// type GetFormElement = (target: HTMLFormElement) => 
//   <T = HTMLInputElement>(elementName: string) => T

type GetFormElement = (target: HTMLFormElement) =>
   (elementName: string) => HTMLInputElement

const getFormElement: GetFormElement = (target) => (elementName) => {
  return target[elementName]
}

// const getFormElement = (event: Event) => <>(elementName: string) => {
//   const target = event.target as HTMLFormElement

//   if(!target){
//     return
//   }

//   return target.elements.namedItem(elementName) as HTMLInputElement
// }

const elementTypes = {
  image: createImage,
  text: createText,
  color: createColor,
}

type ImageProps = {
  src: string
  alt: string
}

function createImage ({ src, alt }: ImageProps) {
  const td = document.createElement('td')
  const img = document.createElement('img')
  img.src = src
  img.alt = alt
  img.width = 100
  td.appendChild(img)
  return td
}

function createText (value: string) {
  const td = document.createElement('td')
  td.textContent = value
  return td
}

function createColor (value: string) {
  const td = document.createElement('td')
  const div = document.createElement('div')
  div.style.width = '100px'
  div.style.height = '100px'
  div.style.background = value
  td.appendChild(div)
  return td
}


form.addEventListener('submit', async (e) => {
  e.preventDefault()
  
  const formTarget = e.target as HTMLFormElement
  
  if(!formTarget){
    return
  }

  const getElement = getFormElement(formTarget)
  // const getElement = getFormElement(e)
  const image = getElement('image')

  const data = {
    image: image.value,
    brandModel: getElement('brand-model').value,
    year: getElement('year').value,
    plate: getElement('plate').value,
    color: getElement('color').value,
  }

  const result = await post(url, data)

  if (result.error) {
    console.log('deu erro na hora de cadastrar', result.message)
    return
  }

  const noContent = document.querySelector('[data-js="no-content"]')
  if (noContent) {
    table.removeChild(noContent)
  }

  createTableRow(data)

  // Object is possibly 'null' => motivo disso é que assim como podemos add um
  // event também podemos remover esse event.
  formTarget.reset()
  image.focus()
})

type Car = {
  image: string
  brandModel: string
  plate: string
  year: string
  color: string
}

function createTableRow (data: Car) {
  const elements = [
    { type: 'image', value: { src: data.image, alt: data.brandModel } },
    { type: 'text', value: data.brandModel },
    { type: 'text', value: data.year },
    { type: 'text', value: data.plate },
    { type: 'color', value: data.color }
  ] as const

  const tr = document.createElement('tr')
  tr.dataset.plate = data.plate

  elements.forEach(element => {
    let td
    
    if(element.type === 'image') {
      td = elementTypes[element.type](element.value)
    }

    if(element.type === 'text'){
      td = elementTypes[element.type](element.value)
    }

    if(element.type === 'color'){
      td = elementTypes[element.type](element.value)
    }

    if(td) {
      tr.appendChild(td)
    }
  })

  const button = document.createElement('button')
  button.textContent = 'Excluir'
  button.dataset.plate = data.plate

  button.addEventListener('click', handleDelete)

  tr.appendChild(button)

  table.appendChild(tr)
}

async function handleDelete (e: MouseEvent) {
  const button = e.target as HTMLButtonElement

  if(!button){
    return
  }

  const plate = button.dataset.plate

  const result = await del(url, { plate })

  if (typeof result === 'object') {
    console.log('erro ao deletar', result.message)
    result
    return
  }

  const tr = document.querySelector<HTMLTableElement>(`tr[data-plate="${plate}"]`)
  if(tr) {
    table.removeChild(tr)
  }

  button.removeEventListener('click', handleDelete)
  
  const allTrs = table.querySelector('tr')
  if (!allTrs) {
    createNoCarRow()
  }
}

function createNoCarRow () {
  const tr = document.createElement('tr')
  const td = document.createElement('td')
  const thsLength = document.querySelectorAll('table th').length
  td.setAttribute('colspan', String(thsLength))
  td.textContent = 'Nenhum carro encontrado'

  tr.dataset.js = 'no-content'
  tr.appendChild(td)
  table.appendChild(tr)
}

async function main () {
  const result = await get(url)

  if (result.error) {
    console.log('Erro ao buscar carros', result.message)
    return
  }

  if (result.length === 0) {
    createNoCarRow()
    return
  }

  result.forEach(createTableRow)
}

main()