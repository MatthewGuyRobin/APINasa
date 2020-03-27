const hbs = require('express-handlebars')
const path = require('path');
const express = require('express');
const app = express();
const getAPI = require("./lib/getMarsWeather")

require('dotenv').config();


app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.get("/", async (req, res) => {
    let data = await getAPI.getMarsWeather();
    
    let hiTemp = data[451].AT.mx;
    let loTemp = data[451].AT.mn;



    res.render('index', {
        hiTemp,
        loTemp
    })

})


app.listen(3000, () => {
    console.log('server is listening on 3000')
});