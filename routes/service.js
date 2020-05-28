var express = require('express');
var router = express.Router();

//TESTEO INICIAL
router.get('/',(req,res)=>{
    var data = req.query;
    res.status(200).json(data);
});

//0.ServicioPrueba
router.post('/test',(req,res)=>{
var data = req.body;
res.status(200).json(data);
});




module.exports = router;