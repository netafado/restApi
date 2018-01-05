'use strict'
const express   =  require( 'express' );
const server    =  express();
const bodyParser = require('body-parser');

const routerIndex = require('./routes/router');

const db = require('./config/db');

const port = 3000;
// servir arquivos staticos
server.use(express.static('./public'));
server.use(bodyParser.json());


server.use(routerIndex);

// parse serverlication/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }));

// handler 404
server.use((res, req, next)=>{
    var err = new Error('not found');
    err.status = 404;
    next(err);
});

server.use((err, req, res, next)=>{
    res.json({
        error:  err.message
    })
})

server.listen(port, ()=>{
    console.log(`Rodando na porta: ${port}`);
})