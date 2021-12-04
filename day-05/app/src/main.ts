import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

// let v = 5 
// v = '2' - Type 'string' is not assignable to type 'number'

// function sum(a: number, b:number){
//   return a + b
// }

type TipoSum = (a: number, b:number) => number

// const sum = (a: number, b:number): number => {
//   return  a + b
// }

const sum2: TipoSum = (a, b) => {
  return a + b
}

console.log(sum2(5,2))

const fn = () => {
  return []
}

console.log(fn())

// const n = 'string'
let v: number | string = 1
console.log(v)

function fn2(a: number | string){
  if(typeof a === 'number') {
    a.toFixed
  }else{
    a.toUpperCase()
  }
}

const a = null
console.log(typeof a === 'object' ? a.b : 'não é obejto')

const person = {
  name: 'Gabe',
  age: 25,
  hobbies: ['Programming', 'MuayThai']
}

type Person = typeof person

// const arr: Array<number> = [1, 2, 3]
// const arr: number[] = [1, 2, 3]

// const arr: number[] | string[] = [1, '1']
// const arr2: Array<string | number> = [1, '1']

const t: [number, string] = [1, '1']

const persons: Person[] = [{
  name: 'Daciuk',
  age: 36,
  hobbies: ['Programming', 'MuayThai']
}]

function useState(state) {
  return [state, () => {}]
}