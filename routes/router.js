'use strict'
const express = require('express');
const router =  express.Router();

router.get('/', (req, res)=>{
    res.json({
        msg: "Você esta visitando a home da nossa API"
    })
});

module.exports = router;