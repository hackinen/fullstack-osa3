const mongoose = require('mongoose')

// eslint-disable-next-line no-undef
if (process.argv.length<3) {                    //salasanaa ei annettu
    console.log('give password as argument')
    // eslint-disable-next-line no-undef
    process.exit(1)
}

// eslint-disable-next-line no-undef
const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.lwgjf.mongodb.net/puhelinluettelo?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })


const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)

// eslint-disable-next-line no-undef
if (process.argv.length<4) {        //tulostetaan kaikki
    Person.find({}).then(result => {
        console.log('phonebook:')
        result.forEach(person => {
            console.log(person.name + ' ' + person.number)
        })
        mongoose.connection.close()
    })

} else {                            //lisätään uusi
    const person = new Person({
        // eslint-disable-next-line no-undef
        name: process.argv[3],
        // eslint-disable-next-line no-undef
        number: process.argv[4]
    })

    person.save().then(() => {
        // eslint-disable-next-line no-undef
        console.log(`'${process.argv[3]}' saved to phonebook!`)
        mongoose.connection.close()
    })
}



