require('dotenv').config();
const fetch = require('node-fetch');

const getMarsWeather = async () => {
    let url = `https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0`;

    let data = await fetch(url);
    console.log(data)
    return await data.json();
    } 


module.exports=getMarsWeather;
