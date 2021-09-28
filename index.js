const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())


    let persons = [
      {
        name: "Dan Abramov",
        number: "9999",
        id: 3
      },
      {
        name: "Mary Poppendieck",
        number: "88888",
        id: 4
      },
      {
        name: "Mororororo",
        number: "0303030303",
        id: 12
      },
      {
        name: "kfkfkf",
        number: "000550",
        id: 14
      }
    ]
  
  app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })

  app.get('/api/persons', (req, res) => {
    res.json(persons)
  })

  app.get('/api/info', (req, res) => {
    var mydate = new Date();
    res.send(`<p>Phonebook has info for ${persons.length} persons <br>
    ${mydate}</p>`)
  })

  app.get('/api/persons/:id', (req, res) => {
    const id = req.params.id
    const person = persons.find(p => p.id == id)

    if (person){
        res.json(person)     
    }else{
        res.status(404).end()
    }
  })
  
  app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(p => p.id !== id)
    res.status(204).end()
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

    let name = persons.find(n => n.name == body.name)
    if (name){
      res.json({ error: 'name must be unique' })
    }
    const person = {
      name: body.name,
      number: body.number,
      id: maxId
    }
    res.json(person)

  })
  
  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })