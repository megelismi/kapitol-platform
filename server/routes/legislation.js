var express = require('express');
var router = express.Router();


router.get('/fetch-legislation-data', function(req,res){
    res.json({success: true});
})

module.exports = router;
