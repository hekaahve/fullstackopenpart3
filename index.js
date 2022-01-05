require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const Person = require('./models/person')

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}

app.use(errorHandler)

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger)

  app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })

  app.get('/api/persons', (req, res) => {
    Person.find({}).then(people => {
      res.json(people)
    })
  })

  app.get('/api/info', (req, res) => {
    var mydate = new Date();
    res.send(`<p>Phonebook has info for ${Person.length} persons <br>
    ${mydate}</p>`)
  })

  app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id)
    .then(person =>{
      if (person){
        res.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
  })
  
  app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
    .then(person =>{
      response.status(204).end()
    })
    .catch(error => next(error))
  })

  app.post('/api/persons', (req, res) => {
    const maxId = Math.floor(Math.random() * 100);

    const body = req.body
    //TODO: fix alerts + Delete 503 (Service Unavailable) error from UI-console
    if (!body.name){
      res.json({ error: 'name missing' })
    }
    if (!body.number){
      res.json({ error: 'number missing' })
    }
    const person = new Person({
      name: body.name,
      number: body.number,
      id: maxId
    })
    person.save().then(savedPerson => {
      res.json(savedPerson)
    })

  })

  app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body
  
    const person = {
      name: body.name,
      number: body.number,
      id: body.id
    }
  
    Person.findByIdAndUpdate(request.params.id, person, { new: true })
      .then(updatedPerson => {
        response.json(updatedPerson)
      })
      .catch(error => next(error))
  })

  const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
  //unknown errorhandling
  app.use(unknownEndpoint)
  
  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })