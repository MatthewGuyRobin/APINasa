const {Router} = require('express');
const router = Router()

const getMarsWeather = require('../lib/getMarsWeather')

router.get('/', (req,res)=>{
    res.render('index')
});

router.post('/', async(req,res)=>{


    let data = await getMarsWeather()
    
    let hiTemp = data[451].AT.mx;
    let loTemp = data[451].AT.mn


    res.render('index', {hiTemp , loTemp} )
})


module.exports = router