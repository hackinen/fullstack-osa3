require('dotenv').config()
const express = require('express')
const cors = require('cors')
var morgan = require('morgan')
const app = express()
const Person = require('./models/person')

const generateId = () => {
    return Math.floor(Math.random()*1000000)
}

morgan.token('body', (req, res) => {return JSON.stringify(req.body)})
app.use(express.json())
app.use(express.static('build'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(cors())

let persons = [
  {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
  },
  {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
  },
  {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
  },
  {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
  }
]


app.get('/info', (req, res) => {
    res.send(`<p>Phonebook has info for ${persons.length} people</p><p>${new Date()}</p>`)
  })


app.get('/api/persons', (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons)
  })
})


app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id)
      .then(person => {
        if (person) {
          response.json(person)
        } else {
            response.status(404).end()
        }
      })
      .catch(error => next(error))
})


app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})


app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body

    if (!body.name) {
      return response.status(400).json({
        error: 'name missing'
      })
    }

    if (!body.number) {
      return response.status(400).json({
        error: 'number missing'
      })
    }

    const person = {
      name: body.name,
      number: body.number
    }

    Person.findByIdAndUpdate(request.params.id, person, {new: true})
      .then(updatedPerson => {
        response.json(updatedPerson)
      })
      .catch(error => next(error))
})


app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name) {
      return response.status(400).json({
        error: 'name missing'
      })
    }

    if (!body.number) {
      return response.status(400).json({
        error: 'number missing'
      })
    }

    //nimi ei saa esiintyä kuin kerran
    if (false) {
      return response.status(400).json({
        error: 'name must be unique'
      })
    }

    const person =  new Person({
      name: body.name,
      number: body.number
    })

    person.save().then(savedPerson => {
      response.json(savedPerson)
    })
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}

app.use(errorHandler)
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
}) 
