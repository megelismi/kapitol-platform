var express = require('express');
var router = express.Router();


router.get('/fetch-member-list', function(req,res){
    res.json({success: true});
})

router.get('/fetch-legislation-list', function(req,res){
    res.json({success: false});
})

module.exports = router;
