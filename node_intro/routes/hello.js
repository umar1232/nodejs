const express = require('express');
const status  = require('http-status');
var router = express.Router();

router.get('/',function(req,res){
       return res.send('Hello, World!');
});

router.post('/',function(req,res){
        return res.sendStatus(405);
});

module.exports = router;
