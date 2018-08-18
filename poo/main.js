/*let miObjeto = {
    texto: "hola",
    numero: 20,
    booleano: true,
    arreglo: [1,2,3],
    objeto: {perro: "fido"},
    function: function(){
        return "soy una funcion";
    }
};

console.log(miObjeto);
console.log(miObjeto.function());*/


let sueldoBase = 5000;
let tarifa = 200;
let horas_extra = 4;

//Paradigma estructurado
function calcularSueldo(sueldo, horas, tarifa){
    return sueldo + (horas * tarifa);
}
/*let resultado = calcularSueldo(sueldoBase, horas_extra, tarifa);

console.log(resultado);
*/
//Paradigma Orientado a objetos
let empleado = {
    sueldoBase: 5000,
    tarifa: 200,
    horas_extra: 4,
    calcularSueldo: function(){
        return this.sueldoBase + (this.tarifa * this.horas_extra)
    }
}

//console.log(empleado.calcularSueldo());

let triangulo = {
    base: 10,
    altura: 20,
    perimetro: function(){
        return this.base * 3;
    },
    area: function(){
        return (this.base * this.altura)/2;
    }
}

//console.log(triangulo.perimetro());
//console.log(triangulo.area());

let cuadrado = {
    lado: 10,
    perimetro: function(){
        return (this.lado * 4);
    },

    area: function(){
        return Math.pow(this.lado, 2);
    }
}

//console.log(cuadrado.perimetro());
//console.log(cuadrado.area());

let rectangulo = {
    base: 20,
    altura: 10,
    perimetro: function(){
        return (this.base * 2) + (this.altura * 2);
    },

    area: function(){
        return (this.base * this.altura);
    }
}

//console.log(rectangulo.perimetro());
//console.log(rectangulo.area());

// Clases

/*class Perro {
    constructor(nombre, raza, edad){
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
    }

    ladrar(){
        return "woof wooof woooff!!!";
    }

    comer(comida){
        return `${this.nombre} esta comiendo ${comida}`
    }

}

 let ayudanteDeSanta = new Perro("Ayudante de Santa", "Galgo", 7);

 //console.log(ayudanteDeSanta.comer("croquetas"));

 let fido = new Perro("Fido", "Salchicha", 3);*/

 //console.log(fido.comer("croquetas"));

class Persona{
    constructor(nombre, edad, sexo, peso, altura){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }

    calcularMCI(){
        return (this.peso)/(Math.pow(this.altura, 2));
    }

    esMayorDeEdad(){
        if(this.edad < 18){
            return "no es mayor de edad"
        }else{
            return "es mayor de edad"
        }
    }

    generarRFC(){
        this.generarRFC = this.nombre + this.edad + this.sexo;
    }
}

let persona = new Persona("Cristian", "23", "Hombre", 60, 1.68);

//console.log(persona.calcularMCI().toFixed(3));
//console.log(persona.esMayorDeEdad());

persona.generarRFC();
//console.log(persona.generarRFC);

class Cuenta{
    constructor(titular, cantidad){
        this.titular = titular;
        this.cantidad = cantidad;
    }

    ingresar(){
        if(this.cantidad < 901 && this.cantidad > 9){
            return `La cuenta de ${this.titular} tiene $ ${this.cantidad}`
        }else{
            return "La cantidad ingresada no es valida"
        }
    }

    retirar(retiro){

        this.monto = this.cantidad - retiro
        if(this.monto < 901 && this.monto > 9){
            return `Se retiro $${retiro} de la cantidad $${this.cantidad}, dejando un monto de $${this.monto}`
        }else{
            return "La cantidad a retirar no es valida"
        }

    }
}

let cliente = new Cuenta("Cristian", 900);

//console.log(cliente.ingresar());
//console.log(cliente.retirar("100"))

class Animal{
    constructor(nombre, peso){
        this.nombre = nombre;
        this.peso = peso;
        //console.log("Se creo Animal");
    }

    getNombre(){
        return this.nombre
    }

    comer(comida){
        return `Mi animal esta comiendo ${comida}`
    }
}

class Perro extends Animal{
    constructor(nombre, peso, raza, color){
        super(nombre, peso)
        this.raza = raza;
        this.color = color;
        //console.log("Se creo un perro")
    }
    ladrar(){
        return "Guau guau!!"
    }

}
const pug = new Perro("Solovino", "12kg", "Pug", "Beige")
//console.log(pug.getNombre());
//console.log(pug.ladrar());

class Largometraje{
    constructor(tiempo){
        this.tiempo = tiempo;
    }

    getTiempo(){
        return this.tiempo;
    }
}


class Pelicula extends Largometraje{
    constructor(tiempo, genero){
    super(tiempo)
    this.genero = genero;
    }
}

class Documental extends Largometraje{
    constructor(tiempo, director){
        super(tiempo)
        this.director = director;
    }
}

class Cine{
    constructor(largometraje){
        this.largometraje = largometraje;
    }

    reproducir(){
        return `Reproduciendo ..... ${this.largometraje.getTiempo() }`;
    }
}

let doc = new Documental("90 min", "Pedro Torres")
let peli = new Pelicula("120 min", "Acción")

let sala1 = new Cine(doc)
let sala2 = new Cine(peli)

//console.log(sala1.reproducir());
//console.log(sala2.reproducir());

/* class Rectangulo{
    constructor(alto,ancho){
        this.alto = alto;
        this.ancho = ancho;
    }

    getAncho(){
        return this.ancho;
    }

    getAlto(){
        return this.alto
    }

    setAncho(nuevoAncho){
        this.ancho = nuevoAncho
    }

    setAlto(nuevoAlto){
        this.alto = nuevoAlto
    }

    calcularArea(){
        return (this.ancho * this.alto)
    }
}

let rect = new Rectangulo(12,45);
console.log(rect.calcularArea());

class Cuadrado extends Rectangulo{
    constructor(alto, ancho){
        super(alto,ancho)
    }
} */

class Electrodomestico{
    constructor(consumoE, color , peso){
        this.consumoE = consumoE;
        this.color = color;
        this.peso = peso;
        this.precio = 0;
    }

}

class Lavadora extends Electrodomestico{
    constructor(consumoE, color, peso, carga){
        super(consumoE, color, peso)
        this.carga = carga;
    }

    precioFinal(){
        this.precio = (this.carga * this.consumoE)
        return this.precio
    }
}

let mabe = new Lavadora(200, "azul", "50kg", 5)

//console.log(mabe.precioFinal());
//console.log(mabe.precio);

class Construccion{
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, anchoTerreno){
        this.numPuertas = numPuertas;
        this.numVentanas = numVentanas;
        this.numPisos = numPisos;
        this.direccion = direccion;
        this.altura = altura;
        this.largo = largo;
        this.anchoTerreno = 0;

    }

    calcularMetros(){
        this.anchoTerreno = (this.altura * this.largo)
        return this.anchoTerreno
    }

    getDireccion(){
        return this.direccion
    }

    setDireccion(nuevaDireccion){
        this.direccion = nuevaDireccion
        return this.direccion
    }
}

class Casa extends Construccion{
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo){
        super(numPuertas, numVentanas, numPisos, direccion, altura, largo)
    }
}

class Edificio extends Construccion{
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo){
        super(numPuertas, numVentanas, numPisos, direccion, altura, largo)
    }
}

let casa1 = new Casa(4, 6, 2, "cdmx", 20, 10)

let edificio1 = new Edificio(20, 60, 10, "edomex", 200, 100)

console.log(casa1.calcularMetros());
console.log(casa1.anchoTerreno);

console.log(casa1.getDireccion());

console.log(edificio1.calcularMetros());
console.log(edificio1.anchoTerreno);

console.log(edificio1.getDireccion());