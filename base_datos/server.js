const express = require('express');
const bodyParser = require('body-parser')

const {
    Alumno,
    Programa
} = require('./client')

let app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/', (req, res) =>{
    res.send('Hello, world')
})

app.post('/api/v1/programa/', (req, res)=>{
    const {description, duracion} = req.body
    let nuevoPrograma = Programa({
        description,
        duracion
    })
    nuevoPrograma.save((req, pr)=>{
        res.status(201).send(pr)
    })
})

app.post('/api/v1/alumno/', (req, res)=>{
    const {nombre, apellido, edad, programa} = req.body
    let nuevoAlumno = Alumno({
        nombre,
        apellido,
        edad,
        programa
    })
    nuevoAlumno.save((req, alumno)=>{
        res.status(201).send(alumno)
    })
})

app.get('/api/v1/alumno/', (req, res)=>{
    Alumno.find({},(err, alumnos) =>{
        Programa.populate(alumnos,{path:'programa'}, (err,result)=>{
            res.status(200).send(result)
        })
    })
})

app.get('/api/v1/alumno/:uid/', (req, res) => {
    let {uid} = req.params;
    Alumno.findById(uid).exec()
        .then(alumno => 
            Programa.populate(alumno,{path:'programa'}, (err,result)=>{
                res.status(200).send(result)
            }))
        .catch(err => res.send(err))
})

app.delete('/api/v1/alumno/:uid/', (req, res) => {
    let {uid} = req.params;
    Alumno.findByIdAndRemove(uid).exec()
        .then(alumno=> 
            Programa.populate(alumno,{path:'programa'}, (err,result)=>{
                res.status(204).send(alumno)
            }))
        .catch(err => res.send(err))
})

app.put('/api/v1/alumno/:uid', (req, res) => {
    let {uid} = req.params;
    Alumno.findByIdAndUpdate(uid, {$set:req.body},{new:true}).exec()
    .then(alumno => 
        Programa.populate(alumno,{path:'programa'}, (err,result)=>{
            res.status(200).send(result)
        }))
    .catch(err => res.send(err))
})

app.listen(3000, ()=> console.log('Server on port 3000'))