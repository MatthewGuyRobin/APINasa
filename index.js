const hbs = require('express-handlebars');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

require('dotenv').config();

const router = require('./routes/router')

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', router);

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));

app.set('view engine', '.hbs');




// app.post('/', async (req, res) => {

//     let data = await getMarsWeather()

//     console.log(data);

//     let marsHiTemp = '433'.AT.mx;


    // let temp = data.main.temp;
    // let description = data.weather[0].description;
    // let wind = data.wind.speed;

    // let feelslike = data.list[0].main.feels_like;

    // console.log(data);

//     res.render('index', { marsHiTemp } )
// 

app.listen(3000, () => {
    console.log('server is listening on 3000')
});