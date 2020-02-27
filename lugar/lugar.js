const axios = require('axios');


//funcion que recibe los parametros de la direcion (argv.direcion)
const getLugar = async (dir) => {
    //esto lo transforma a una direcion url
    const encodeURL = encodeURI(dir);
    console.log(encodeURL);

    const instance = axios.create({
        //probada desde postman

        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: { 'X-RapidAPI-Key': '0bae536c00msha9339428abc9d2dp1fd0fejsn27761ee01bd4' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`no hay resultados para ${dir}`);
        
    }
        
    const data = resp.data.Results[0];
    const direccion = data.name;
    const latitud = data.lat;
    const log = data.lon;


    return {
        direccion,
        latitud,
        log
    }


}

module.exports = {
    getLugar
}

