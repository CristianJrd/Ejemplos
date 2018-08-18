const mongoose = require('mongoose')
let url = 'mongodb://cristian:1q2w3e4r5t6y@ds121282.mlab.com:21282/prueba'

mongoose.connect(url)

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

const programaSchema = new Schema({
   programa: ObjectId,
   description: String,
   duracion: String
})

const alumnoSchema = new Schema({
    alumno: ObjectId,
    nombre: String,
    apellido: String,
    edad: Number,
    programa: {
        type: Schema.ObjectId,
        ref:'Programa'
    }
})

var Alumno = mongoose.model('Alumno', alumnoSchema)
var Programa = mongoose.model('Programa', programaSchema)

module.exports = {Alumno, Programa}