const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', (req, res) => res.send('Hello World! Estas en la pagina de inicio'))

//Obtener Usuarios
app.get('/usuarios/', (req, res) => res.send('Aqui devolveria una lista de usuarios'))

//Crear Usuarios
app.post('/usuarios/',(req, res) => {
    let nuevoUsuario = req.body
    console.log(nuevoUsuario)
    /* 
        Codigo para acceder a la base de datos
    */
    res
        .status(201)
        .send(nuevoUsuario)
})

//Modificar Usuario
app.put('/usuarios/:uid/', (req, res) => {
    console.log(req.params)
    console.log(req.query);
    res
        .status(200)
        .send("Usuario Actualizado")
})

//Borrar Usuario
app.delete('/usuarios/:uid',(req, res) =>{

    console.log(req.params)
    res
        .status(204)
        .send(req.params)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))