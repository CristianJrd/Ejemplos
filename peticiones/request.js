/* let modulo = require("./modulo.js");

//console.log(modulo);

let resultado = modulo.restar(5, 3);

console.log(resultado); */

const request = require ('request');

/* request.get('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
}); */

request.get('https://www.swapi.co/api/people/4/', function (error, response, body) {
    if (response.statusCode == 200){
        let respuesta = JSON.parse(body); 
        console.log(respuesta.name);
    }else console.log(error);
});
//JSON = Java Script Object Notation

//API = Application Programming 