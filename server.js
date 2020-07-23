const express = require('express');
const mongoose = require('mongoose');
const db = require('./Config/key/dbkey').mongoURI;
const path = require ('path');
const app = express();
const item = require('./route/api/menu')

//body parser
app.use(express.json());

//static folder
app.use(express.static(__dirname+'./public'));

//Mongodb Connetion
mongoose.connect(db, {useNewUrlParser:true , useUnifiedTopology : true})
    .then(res => console.log( 'mongodb conneted'))
    .catch(err => console.log('err'))

app.get('/', (req,res) => {
    res.send('This is Home Page Of Backend')
})

app.use('/menu', item)




const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('Server run at ' + PORT));