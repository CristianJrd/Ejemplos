const express = require('express')
const bodyParser = require('body-parser')

const {
    Tipos,
    Cervezas
} = require('./client')

let app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('welcome')
})

app.post('/Tipos', (req, res) => {
    const {nombre,descripcion} = req.body
    let nuevoTipo = Tipos({
        nombre,
        descripcion
    })
    nuevoTipo.save((req,tipos) =>{
        res.status(201).send(tipos)
    })
})

app.post('/Cervezas', (req, res) => {
    const {nombre, pais, porcentaje, cantidad, tipo} = req.body
    let nuevaCerveza = Cervezas({
        nombre,
        pais,
        porcentaje,
        cantidad,
        tipo
    })
    nuevaCerveza.save((req,cerveza) => {
        res.status(201).send(cerveza)
    })
})

app.get('/Tipos', (req, res) => {
    Tipos.find({}, (err,tipos) => {
        Cervezas.populate(tipos, {path: 'cerveza'}, (err, result) => {
            res.status(200).send(result)
        })
    })
})

app.get('/Cerveza', (req, res) => {
    Cervezas.find({}, (err,cerveza) => {
        Tipos.populate(cerveza, {path: 'tipo'}, (err, resultado) => {
            res.status(200).send(resultado)
        })
    })
})

app.listen(3000, ()=> console.log('Server on port 3000'))