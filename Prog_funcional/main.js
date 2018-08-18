/* function triple(numero){
    return numero * 3;
}
 */
//Funciones de orden superior

//Funciones callback

let funcionDeOrdenSuperior = function(callback){
    console.log("orden superior")
    callback();
}
//Forma de ejecución No. 2: Pasando una variable que contiene una función
let funcionCallback = function(){
    console.log("funcion callback")
}

//funcionDeOrdenSuperior(funcionCallback);

let ordenSuperior = function(saludar){
    console.log("orden superior");
    saludar();
}
//Forma de ejecución No. 1: Función al vuelo
/* ordenSuperior(function(){
    console.log("hola");
}); */


//Orden superior callback
let miFuncion = (callback) => {
    console.log("orden superior");
    callback();
}

/* miFuncion( () => {
    console.log("callback");
});
 */

/* let saluda = (mensaje, formato) =>{
    formato(mensaje);    
}

let minuscula = (mensaje) => {
        console.log(mensaje.toLowerCase());
}

let mayus = (mensaje) =>{
    console.log(mensaje.toUpperCase());
}

saluda("Hola A Todos", mayus);
saluda("Hola A Todos", minuscula); */

// Filter

/* let animales = [
    { nombre: "Heladio", especie: "tortuga" },
    { nombre: "Jose", especie: "tigre" },
    { nombre: "Carlos", especie: "cuyo" },
    { nombre: "Fabiola", especie: "tortuga" },
    { nombre: "Mauricio", especie: "cuyo" },
    { nombre: "Rogelio", especie: "pato" }
];

let cuyos = [];

 for(let i=0; i<animales.length; i++){
    if (animales[i].especie == "cuyo"){
        cuyos.push(animales[i]);
    }
} 

cuyos = animales.filter(animal=>{
    return animal.especie == "cuyo";
});

console.log(cuyos);  */

//Map

let animales = [
    { nombre: "Heladio", especie: "tortuga" },
    { nombre: "Jose", especie: "tigre" },
    { nombre: "Carlos", especie: "cuyo" },
    { nombre: "Fabiola", especie: "tortuga" },
    { nombre: "Mauricio", especie: "cuyo" },
    { nombre: "Rogelio", especie: "pato" }
];

let patos = [];

patos = animales.map( animal =>{
    return animal.nombre;
} );

// console.log(patos);


let palabras = [
    {cadena: "Hola", cd2: "amigos"},
    {cadena: "cinta", cd2: "roja", cd3: "cdmx y gdl"},
    {cadena: "yei"}
];

let carac = [];

carac = palabras.filter( cad =>{
    console.log(cad.cadena.toUpperCase());
    console.log(cad.cd3.toUpperCase());
}).map( all =>{
    return all;
});

console.log(carac);

let cantidades = [
    {min: 120},
    {min: 80},
    {min: 200},
    {min: 100}
];

let hrs = [];

hrs = cantidades.filter( minutos => {
    return (minutos.min / 60) >= 2;
});

console.log(hrs);

let lista = [
    {num: 1},
    {num: 3},
    {num: 5},
    {num: 7},
    {num: 9}
];

let menor = [];

menor = lista.filter(list =>{
    return (list.num * 7) < 30;
});

console.log(menor);