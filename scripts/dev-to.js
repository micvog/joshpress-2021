const axios = require('axios')
const fs = require('fs')
const path = require('path')

//dev.to username
let username = 'shelob9'

const encoding = 'utf8'

async function getArticlesIndex() {
  //Get the list of articles
  // eslint-disable-next-line no-await-in-loop
  const res = await axios.get(`https://dev.to/api/articles?username=${username}`, {
    headers: {},
  })

  const { data } = res
  let dataPath = path.join(__dirname, '../data/', 'dev-to.json')
  console.log({ dataPath })
  fs.writeFileSync(dataPath, JSON.stringify(data), encoding)
  return data
}

;(async function main() {
  try {
    await getArticlesIndex()
  } catch (err) {
    console.log({ err })
  }
})()
