const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 8080;
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);

app.use(cors())
app.use(morgan(':method :url status::status :response-time ms'))
app.use(express.json());

morgan.token('id', (req) => { //creating id token
  return req.id
})

app.get('/', (req, res) => {
  res.send('App up and running')
})

app.listen(PORT, () => {
  console.log(`Knex and Express apps are currently running on port ${PORT}`)
})

//Dont forget to install the folloeing
// -express
// -morgan
// - knex
// - pg
// - dotenv
// - cors
// - nodemon