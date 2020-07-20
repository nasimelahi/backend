const mongoose = require('mongoose');
const schema = mongoose.Schema;

const menuShema = {
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
}

let menu = mongoose.model('menu',menuShema);
module.export = menu;