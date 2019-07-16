const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db.js')
const eventRouter = require('./event/router')
const ticketRouter = require('./ticket/router')
const event = require('./event/model')
const ticket = require('./ticket/model')
const app = express()
const jsonParser = bodyParser.json()

app.use(cors())
app.use(jsonParser)
app.use(eventRouter)
app.use(ticketRouter)

const port = process.env.PORT || 4000

app.listen(port, () => `Listening on port ${port}`)