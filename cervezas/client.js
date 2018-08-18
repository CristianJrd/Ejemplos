const mongoose = require('mongoose')
let url = 'mongodb://cristian:1q2w3e4r5t6y@ds121282.mlab.com:21282/prueba'

mongoose.connect(url)

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

const tiposSchema = new Schema({
    tipo: ObjectId,
    nombre: String,
    descripcion: String,
    cerveza: {
        type: Schema.ObjectId,
        ref:"Cervezas"
    }
})

const cervezasSchema = new Schema({
    cerveza: ObjectId,
    nombre: String,
    pais: String,
    porcentaje: Number,
    cantidad: Number,
    tipo: {
        type: Schema.ObjectId,
        ref:'Tipos'
    }
})

var Tipos = mongoose.model('Tipos', tiposSchema)
var Cervezas = mongoose.model('Cervezas', cervezasSchema)

module.exports = {Tipos, Cervezas}