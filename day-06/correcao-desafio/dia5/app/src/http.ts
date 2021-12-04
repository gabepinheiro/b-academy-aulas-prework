// Definindo as chaves dinamicas: [key: string]: string
//Passando somente [key: string], está dizendo que aceita qualquer string

// Mas tem uma forma legal utilizando tipos literais definindo os valores que vão ser permitidos no headers
// [key in Type] => está dizendo que a key vai aceitar somente os valores definidos no tipo passado
// Usando tipos literais ajuda a ganhar o autocomplete. 

// type ValidHeaders = 'content-type' | 'accept' => Tipos literais

// type Headers = {
//   // [key: string]: string
//   [key in ValidHeaders]?: string
// }

// {
//   'content-type': 'application/json',
// }

// type Options = {
//   method: string
//   //É um obj headers com valores especificos, com isso podemos utilizar tipos literais para tipar
//   headers: Headers,
//   body: string
// }

const request = (url: string, options?: RequestInit) =>
  fetch(url, options)
    .then<{car: string}>(r => r.json())
    .catch(e => ({ error: true, message: e.message }))

// A vantagem em utilizar o tipo literal é o ganho do autocomplete
type Methods = 'POST' | 'GET' | 'DELETE'

// type DataPost = {
//   plate: string
//   image: string
//   bradModel: string
//   year: string
//   color: string 
// }

// type DataDelete = {
//   plate?: string
// }

// type Data = DataPost | DataDelete
// type CreateRequest = (method: Methods) => <Data>(url: string, data: Data) => void

const createRequest = (method: Methods) => <Data>(url: string, data: Data) => request(url, {
  method,
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(data)
})

export const get = request
export const post = createRequest("POST")
export const del = createRequest('DELETE')
