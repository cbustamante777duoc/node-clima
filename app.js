
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion:{
        alias:'d',
        desc:'Direcion de la cuidad para obtener el clima',
        demand:true
    }
}).argv;

console.log(argv.direccion);
// 2df4f6c61c0fb68b3cf83669ca830068 api key
//para probar (node app -d "Bangkok"); Bangkok,

/*lugar.getLugar(argv.direccion)
    .then(console.log);
*/

/*clima.getClima(13.730000,100.500000)
    .then(console.log)
    .catch(console.log);
*/

const getInfo = async (direccion) => {

    try {
        const cords = await lugar.getLugar(direccion);
        const temp = await clima.getClima(cords.latitud, cords.log);
        return `el clima de ${ cords.direccion} es de ${temp}`
        
    } catch (error) {
        return `no se puede determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)
