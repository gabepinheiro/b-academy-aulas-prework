// fetch('url')
//   .then(result => result.json())
//   .then(result => console.log(result))

const baseUrl = 'https://rickandmortyapi.com/api'

function request (router = '', method = 'GET', data) {
  return fetch(baseUrl+router, {
    method,
    headers: {
     'content-type': 'application/json'
    },
     body: JSON.stringify(data)
  })
  .then(result => result.json())
  .catch(error => error)
}

const get = request

const post = (data) => request('POST', data)

const getCharacters = () => request('/character')
const getLocations = () => request('/location')
const getEpisodes = () => request('/episode')

const getEpisodeByPage = () => request('/episode?page=2')

async function main () {
  const characters = await getCharacters()
  const locations = await getLocations()
  const episodes = await getEpisodes()

  const page2 = await getEpisodeByPage()

  console.group(
    page2
  )

}

export { main }