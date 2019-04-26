const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const port = process.env.PORT || 5000
const app = express()

const db = require('./db/connection')

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    const obj = {
        message: 'Cux gasi!'
    }
    res.send(obj)
})



app.post('/register', (req, res) => {
    const telo = req.body
    const userData = db.get('juzers_data')

    userData.insert(telo).then(response => {
        res.json(response)
    }).catch(error => {
        res.send(500)
    })
})

app.get('/register', (req, res) => {
    const users = db.get('juzers_data')
    users.find({}).then(response => {
        res.json(response)
    })
})

app.post('/login', (req, res) => {
    const email = req.body.imejl
    const sifra = req.body.sifra

    const users = db.get('juzers_data')

    users.findOne({
        "username": email,
        "pass": sifra
    }).then(response => {
        if (response != null) {
            res.send(200)
        }
        else {
            res.send(304)
         }

    })



})

app.listen(port, () => {
    console.log(`Slušam port ${port}`)
})