require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const Person = require('./models/person')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))
  
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
    res.send(`<p>Phonebook has info for ${persons.length} persons <br>
    ${mydate}</p>`)
  })

  app.get('/api/persons/:id', (req, res) => {
    Person.findById(req.params.id).then(person =>{
      res.json(person)
    })
  })
  
  app.delete('/api/persons/:id', (req, res) => {
    Person.findByIdAndDelete(req.params.id).then(person =>{
      console.log(person +"deleted")
    })
  })

  app.post('/api/persons', (req, res) => {
    const maxId = Math.random(10000)

    const body = req.body

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
  
  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })