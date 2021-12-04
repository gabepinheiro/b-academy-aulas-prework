// import "./style.css";

// document.querySelector("#app").innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
//`



// Escope de Função
// Escopo de Blocp
// Escopo de Module

// Hoisting
//
// if(true){
//   var a = 1
// }
// console.log('a: ', a)

// function test(){
//   var a = 1
// }

// console.log('a: ', a)

// function getColors(color){
//   const colors = {
//     blue: 'blue',
//     red: 'red',
//     green: 'green',
//     default: 'Cor invalida'
//   }
//   return colors[color ?? 'default'] ?? colors['default']
// }

// const color = getColors('blue')
// console.log(color)

const $app = document.querySelector('[data-js=app]')
const $link = document.querySelector('[data-js=link]')
const $btn = document.querySelector('[data-js=btn]')


$link.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('click link')
})

$btn.addEventListener('click', (e) => {
  e.preventDefault()
  e.stopPropagation()
  console.log('click button')
})
