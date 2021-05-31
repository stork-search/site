import axios from 'axios'

const githubApiEndpoint = 'https://api.github.com/graphql'
const token = process.env.GITHUB_TOKEN
const headers = { Authorization: `bearer ${token}` }

const releasesQuery = `
{
  repository(name: "stork", owner: "jameslittle230") {
    releases(first: 20, orderBy: { field: CREATED_AT, direction: DESC }) {
      nodes {
        descriptionHTML
        isDraft
        publishedAt
        tagName
        url
      }
    }
  }
}
`

const makeRequest = (query) =>
  axios.post(githubApiEndpoint, { query }, { headers })

const releases = makeRequest(releasesQuery)
  .then((resp) => resp.data)
  .then((data) => data.data.repository.releases.nodes)
  .then((data) => data.filter(d => !d.isDraft))

export { releases }
