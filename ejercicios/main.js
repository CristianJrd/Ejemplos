const request = require('request');

/* request.get('http://pokeapi.co/api/v2/pokemon?limit=151', function (error, response, body) {
    if (response.statusCode == 200){
        let respuesta = JSON.parse(body).results; 
        respuesta.map( pokemon => {
            request.get(pokemon.url, (error, response, body) => {
                let miPokemon = JSON.parse(body);
            });
        });

        console.log(poke);
    }else console.log(error);
}); */
