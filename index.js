const express = require('express');
const mongoose = require('mongoose')
const server = express();

const db = 'mongodb+srv://farazahmed923451:farazahmed2142988@cluster0.lzjbefp.mongodb.net/crud?retryWrites=true&w=majority'

mongoose.connect(db).then(()=>{
    console.log('connection success')
}).catch((err=> console.log('connection failed')));


const  productRouter  = require('./routes/productRoutes');
server.use(express.json());
server.use(express.static('public'));
server.use('/api',productRouter.router);


server.listen(8080, () => {
    console.log('server start')
})