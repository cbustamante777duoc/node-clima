const axios = require('axios');


const getClima = async (lat,log ) =>{

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=2df4f6c61c0fb68b3cf83669ca830068&units=metric`)

    return resp.data.main.temp;

}




module.exports = {
    getClima
}