const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    title : {
        type:String,
        require:true
    },
    catagorey :{
        type:String,
        require:true
    },
    price :{
        type:Number,
        require:true
    },
    ingridient : {
        type:String,
        require:true
    },
    detail : {
        type:String,
        require:true
    }
})

let menu = menuSchema
module.exports = mongoose.model('menu',menu);