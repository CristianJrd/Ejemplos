/* let numero = 100;

let funcion = () => {
    console.log("soy una funcion");
} */



let miObjeto = {
    sumar: function(num1, num2){
        return num1+num2;
    },
    restar: (num1, num2) => {
        return num1-num2;
    }
}

module.exports = miObjeto;