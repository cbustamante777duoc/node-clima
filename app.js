const axios = require('axios')


const argv = require('yargs').options({
    direccion:{
        alias:'d',
        desc:'Direcion de la cuidad para obtener el clima',
        demand:true
    }
}).argv;

console.log(argv.direccion);

//para probar (node app -d "santiago de chile");

const encodeURL = encodeURI(argv.direccion);
console.log(encodeURL);

const instance = axios.create({
    //probada desde postman
    
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
    headers: {'X-RapidAPI-Key': '0bae536c00msha9339428abc9d2dp1fd0fejsn27761ee01bd4'}
  });

  instance.get()
  .then(resp => {
      //solo va imprimir el primero en postman sale como se llaman los paramentros
      console.log(resp.data.Results[0]);
  })
  .catch(err =>{
      console.log('error',err);
  })