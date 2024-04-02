const express = require('express')
const addDays = require('date-fns/addDays')

const app = express()

app.get('/', (request, respose) => {
  const result = new Date()

  const date = addDays(
    new Date(result.getFullYear(), result.getMonth(), result.getDate()),
    100,
  )

  respose.send(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`)
})

module.exports = app
