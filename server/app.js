const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 8080;
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
const bodyParser = require('body-parser')

app.use(cors())
app.use(morgan(':method :url status::status :response-time ms'))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

morgan.token('id', (req) => { //creating id token
  return req.id
})

app.get('/', (req, res) => {
  res.send('App up and running')
})

app.get('/users', (req, res) => {
  knex('users')
    .select('*')
    .then((userData) => {
      res.status(200).send(userData)
    })
})

app.get('/Items', (req, res) => {
  knex('inventory')
    .select('*')
    .then((userData) => {
      res.status(200).send(userData)
    })
})

app.get('/Items/:userId', (req, res) => {
  knex('inventory')
    .select('*')
    .where('userId', req.params.userId)
    .then((userData) => {
      res.status(200).send(userData)
    })
})

app.post('/login', (req, res) => {
  knex('users')
  .select('id', 'FirstName', 'LastName', 'UserName')
  .where(({ UserName: req.body.username, Password: req.body.password}))
  .then((userData) => {
    if (userData.length > 0) {
      res.status(200).send(userData);
    } else {
      res.status(400).send('Invalid username or password');
    }
  })
  .catch((err) => {
    console.error(err); // Log the error for debugging
    res.status(500).send({error: 'Server error', details: err.message});
  });
});

app.post('/create-account', (req, res) => {
  knex('users')
  .insert(req.body)
  .then(() => res.status(200).send({message: 'User account created successfully'}))
  .catch((err) => {
    console.error(err); // Log the error for debugging
    res.status(500).send({error: 'Server error', details: err.message});
  });
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