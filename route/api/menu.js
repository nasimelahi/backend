const express = require('express');
const router = express.Router();
const db = require('../../model/Menu')


// get all the data
router.get('/', (req,res)=>{
    db.find()
    .sort({data:-1})
    .then( item => res.json(item))
})

//get induvadual item 

router.get(':id',( req,res) =>{
    console.log(req.params.id)
})

// post item

router.post('/', (req,res) => {
    const { title, catagorey, price , ingridient, detail } = req.body

    const newItem = new db({
        title : title,
        catagorey : catagorey,
        price : price,
        ingridient: ingridient,
        detail : detail
    })
    if(title =="" || catagorey =="" || price ==""  || ingridient ==""  || detail == ''){
       return res.status(400).json({ "msg" : "please fill all from with correct detail"})
        
    }
    newItem.save()
    .then(item => {res.json(item)})
})

module.exports = router