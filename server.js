const express = require('express')

const addClaim = require('./addClaim');

const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.send('Hello from Express!')
})

app.get('/addclaim', (request, response) => {
  addClaim();
  response.send('ok')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})