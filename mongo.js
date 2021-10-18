const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstackheini:${password}@cluster0.z0bf7.mongodb.net/not-app?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
  id: Number,
})

const Person = mongoose.model('Person', personSchema)

var person = new Person({
    name: process.argv[3],
    number: process.argv[4]
});

if (person.name == undefined && person.number == undefined ) {
    Person.find({}).then(result => {
        console.log('Phonebook:')
        result.forEach(person => {
          console.log(person.name+' '+person.number)
        })
        mongoose.connection.close()
      })    
} else {
    person.save().then(response => {
        console.log(`person ${process.argv[3]} ${process.argv[4]} saved!`)
        mongoose.connection.close()
      })
}
  
