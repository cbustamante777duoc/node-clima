
const lugar = require('./lugar/lugar');

const argv = require('yargs').options({
    direccion:{
        alias:'d',
        desc:'Direcion de la cuidad para obtener el clima',
        demand:true
    }
}).argv;

console.log(argv.direccion);

//para probar (node app -d "santiago de chile");

lugar.getLugar(argv.direccion)
    .then(console.log);