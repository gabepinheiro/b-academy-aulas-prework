import './style.css'

const inputName = document.querySelector('[data-js="username"]')
const textarea = document.querySelector('[data-js="textarea"]')
const checkboxes = document.querySelector('[data-js="lang"]')
const radios = document.querySelector('[data-js="gender"]')

const form = document.querySelector('[data-js="form"]')

const langSelect = document.querySelector('[data-js="lang-select"]')
const genderSelect = document.querySelector('[data-js="gender-select"]')

function getValue(event, name){
  return event.target.elements[name].value
}

const formField = e => name => e.target.elements[name].value

form.addEventListener('submit', e => {
  e.preventDefault();

  console.log('e.target: ', e.target)
  console.log(e.target.elements)

  const getFieldValue = formField(e)

  const data = {
    usernamename: getValue(e, 'username'),
    email: getFieldValue('email'),
    lang: Array.from(e.target.elements['lang-select'].selectedOptions).map(el => el.value)
  }
})

inputName.addEventListener('input', (e) => {
  e.target.value = 'a'.repeat(e.target.value.lenght)
  console.log(e.target.value)
})

textarea.addEventListener('input', (e) => {
  console.log(e.target.value)
})

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', e => {
    console.log(e.target.value)
    console.log('checked', e.target.checked)
  })
})

radios.forEach(radio => {
  radio.addEventListener('click', e => {
    console.log(e.target.value)
    console.log('checked', e.target.checked)
  })
})

langSelect.addEventListener('change', e => {
  console.log(Array.from(e.target.options).map(el => ({
    value: el.value,
    selected: el.selected
  })))

  // console.log(e.target.selectedOptions)
})

genderSelect.addEventListener('change', e => {
  console.log(e.target.value)
})



// const $App = document.querySelector('[data-js=app]')

// $App.innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

// console.dir($App)
// // const img = '<img src="x" onerror="alert(\'oi\')"'

// const div = document.createElement('div')
// // div.innerHTML = "<p>Olha o conteúdo da div</p>"
// // div.innerHTML = '<img src="x" />' + div.innerHTML
// // div.textContent = img

// div.textContent = 'Olha o conteúdo da div'
// div.className = 'minha-div'

// console.dir(div)

// // $App.appendChild(div)
// $App.prepend(div)

// const img = '<img src="x" />'

// beforebegin = antes do inicio da tag
// afterend = depois do final/fechamento da tag
//
//afterbegin = depois do inicio da tag - prepend
//beforeend =  antes do final/fechamento da tag - appendChild

// const img = document.createElement('img')
// img.src = '/minha-imagem.jpg'
// const div = document.createElement('div')
// div.appendChild(img)

// Só recebe strings representando elementos html
// $App.insertAdjacentHTML('beforebegin', img.innerHTML)
// $App.insertAdjacentHTML('beforebegin', div.outHTML)

// const div = document.createElement('div')
// const img = document.createElement('img')

// div.setAttribute('data-js', 'minha-div')
// // console.log(div.getAttribute('[data-js]'))
// console.log(div.dataset.js)

// img.src='/minha-img.png'
// div.appendChild(img)

// $App.insertAdjacentHTML('beforeend', div.outerHTML)
// $App.removeChild(document.querySelector('[data-js=minha-div]'))

// $App.appendChild(div)

// $App.removeChild(div)

// // $App.replaceChild(document.createElement('section'), div)