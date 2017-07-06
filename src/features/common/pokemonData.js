var promise = require('promise');
var localStorage = require('./localStorage');

var rootAPI = "https://pokeapi.co/api/v2/";

module.exports = {
    forms: function(pokemon){
        return new Promise(function(resolve, reject) {
            var url = rootAPI+"pokemon-form/"+pokemon;
            var data = localStorage.get(url, 1000*60*60*24*30);

            if(data){
                resolve(data);
            }else{
                $.get({
                    url: url
                }).done(function( data ) {
                    localStorage.set(url, data);
                    resolve(data);
                });
            }
        });
    }
}
