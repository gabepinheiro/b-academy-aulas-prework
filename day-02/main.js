// Resolução do desafio do dia 1
// import './style.css'

// const $App = document.querySelector('[data-js=app]')
// const $Link = document.querySelector()

// function render({ title }){
//   return `
//     <h1>Hello ${title}!</h1>
//     <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
//   `
// }

// $Link.addEventListener('click', (e) =>{
//   e.preventDefault()
  
//   $App.innerHTML = render({title: 'Gabriel'})
// })

// const obj = { title: 'Vite'}

// render(obj)

// ===================================================================================================================== //

// higher order functions

//function currying
const sum = (a) => (b) => a + b

const plusOne = sum(1)
console.log(plusOne(3))

const arr = [1,2,3,4,5,6,7,8,9,10]
/**
 [
   { id: 1 },
   { id: 2 },
   { id: 3 }
 ]
 */

const arr2 = []
for(let i = 0; i < arr.length; i++){
  arr2.push({ id: arr[i] })
}

console.log(arr2)

const arr3 = []
for(let i = 0; i < arr.length; i++){
  arr3.push([ arr[i] ])
}

const meuFor = (array, callback) => {
  const tempArr = []

  for(let i = 0; i < array.length; i++){
    tempArr.push(callback(array[i]))
  }

  return tempArr
}

const newArray = meuFor(arr, (item) => [item])
console.log(newArray)

const newArray2 = meuFor(arr, (item) => ({id: item}))
console.log(newArray2)

const filter = (array, callback) => {
  const tempArr = []
  for(let i = 0; i < array.length; i++){
    if(callback(arr[i])){
      tempArr.push(arr[i])
    }
  }

  return tempArr
}

const pares = filter(arr, (number) => number % 2 === 0)
console.log(pares)


















