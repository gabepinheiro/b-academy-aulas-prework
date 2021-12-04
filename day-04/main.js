import './style.css'

// console.log('1')

document.querySelector('[data-js="app"]').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

import { main } from './fetch-api'

main()

// let i = 100000

// while(i--) {
//   console.log(i)
// }

//  

// console.log('1')

// setTimeout(() => {
//   console.log('5') 
// })

// console.log('2')
// console.log('3')
// console.log('4')

// console.log('Programa iniciando...')

// setTimeout(() => {
//   console.log('Programa iniciado!')
//   console.log('1')

//   const promise = new Promise((resolve) => {
//     console.log('promise criada...')
  
//     setTimeout(() => {
//       resolve({ a: 1 })
//     })
//   })
  
//   console.log('2')
  
//   promise
//     .then((result) => result.a + 1)
//     .then((result) => console.log('Resultado da Promise: ', result))
//     .finally(() => {
//       setTimeout(() => alert('Tudo foi executado'), 1000)
//     })
// }, 2000)


// const arr = [1, 2, 3, 4. 5]

// const novoArray = arr.map((item) => item * 2)
// const pares = novoArray.filter((item) => item % 2 === 0)

// const arr = [1, 2, 3, 4, 5]
//   .map((item) => item * 2)
//   .filter((item) => item % 2 === 0)
//   .map()
//   .reducer()

// const promise1 = new Promise((resolve) => {
//   console.log('Promise 1 criada...')
//   setTimeout(() => {
//     resolve({ a : 1 })
//   }, 1000);
// })

// const promise2 = new Promise((resolve) => {
//   console.log('Promise 2 criada...')
//   setTimeout(() => {
//     resolve({ b: 2 })
//   }, 1000)
// })

// promise1.then((result1) => {
//   console.log('Resultado da Promise1:', result1)

//   promise2.then((result2) => {
//     console.log('Resultado da Promise2, ', result2)
//   })
// })

// promise1
//   .then(() => promise2)
//   .then((result) => console.log(result))

// function promise1 () {
//   return new Promise((resolve) => {
//     console.log('Promise 1 criada...')
//     setTimeout(() => {
//       resolve({ a : 1 })
//     }, 1000);
//   })
// }

// function promise2 () {
//   return new Promise((resolve) => {
//     console.log('Promise 2 criada...')
//     setTimeout(() => {
//       resolve({ b: 2 })
//     }, 1000)
//   })
// }

// function promise3 () {
//   return new Promise((resolve) => {
//     console.log('Promise 3 criada...')
//     setTimeout(() => {
//       resolve({ c: 3  })
//     }, 1000)
//   })
// }

// promise1().then(() => {
//   console.log('Promise 1 resolveu')
//   promise2().then(( ) => {
//     console.log('Promise 2 resolveu')

//     promise3().then(() => {
//       console.log('Promise 3 resolveu')
//     })
//   })
// })

// promise1()
//   .then(() => promise2())
//   .then(() => promise3())
//   .then(result => console.log('Resultado da Promise3:', result))


// function promiseResolveReject () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (1 === 2) {
//         reject(new Error('PromiseResolveReject deu Erro'))
//       } else {
//         resolve({ success: true})
//       }
//     }, 4000)
//   })
// } 

// promiseResolveReject()
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))


// async function asyncFunction () {
//   return 1
// }

// const asyncFunction2 = () => {
//   return new Promise((resolve) => {
//     resolve(2)
//   })
// }

// const asyncFunction2 = async () => {
//   return 2
// }

// const asyncFunction2 = async () => {
//   const result = await asyncFunction()

//   console.log('Result:', result)
// }

// asyncFunction2().then(result => console.log(result))