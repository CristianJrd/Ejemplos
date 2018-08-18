let request = require('request');
const URL_BASE = "https://goodreads-devf-aaron.herokuapp.com"

//Defino una promesa que encapsula una petición
let createUser = new Promise( (resolve,reject) => {
    
    let URI = "/api/v1/authors/"
    let URL = URL_BASE + URI;
    let jsonSend = {
        "name": "Juan",
        "last_name": "Rulfo",
        "nacionalidad": "MX",
        "biography": "El señor que soñaba con Comala",
        "gender": "M",
        "age": "100"
    }

    //Crear una petición de tipo POST usando el módulo request
    request.post({ url:URL, formData: jsonSend }, (error, response, body) =>{
        response.statusCode == 201
        ? resolve(JSON.parse(body))
        : reject(response.statusCode + error);

    });

});

/* createUser
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error)); */

let getUser = new Promise((resolve,reject) => {
    let URI = "/api/v1/authors/1063/"
    let URL = URL_BASE + URI;
    
    request.get(URL, (error, response, body) =>{
        response.statusCode == 200
        ? resolve(JSON.parse(body))
        : reject(response.statusCode + error);
    });
});

/* getUser
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error)); */


let putUser = new Promise((resolve,reject) =>{
    let URI = "/api/v1/authors/1063/"
    let URL = URL_BASE + URI;
    let jsonSend = {
        "name": "Jose",
        "last_name": "Pérez",
        "nacionalidad": "MX",
        "biography": "Blabla blabla",
        "gender": "M",
        "age": "88"
    }

    request.put({ url:URL, formData:jsonSend }, (error, response, body) =>{
        response.statusCode == 200
        ? resolve(JSON.parse(body))
        : reject(response.statusCode + error);
    });
});

putUser
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error));

