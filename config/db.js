const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restApi');

let db =  mongoose.connection;

db.on('error', ()=>{console.log('erro conexão banco de dados')});
db.on('open', ()=>{

});

module.exports = db;