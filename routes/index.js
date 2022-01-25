var express = require('express');
var router = express.Router();
const axios = require('axios'); 

/* GET home page. */

router.get('/location/search/', async (req, res, next) => {
        const { query } = req.query;
        const { data } = await axios(`https://www.metaweather.com/api/location/search/?query=${query}`);
        res.send(data);
});

router.get('/location/:locationID', async (req, res, next) => {
  
    const locationID = req.params.locationID;
    const { data } = await axios(`https://www.metaweather.com/api/location/${locationID}/`);
    res.send(data);
});





module.exports = router;
