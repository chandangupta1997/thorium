const productModel = require("../models/productModel")


const createProduct= async function(req,res){
    let data =req.body
   let createdData =productModel.create(data)
    res.send("You have created product succesfully,",createdData)

}



module.exports.createProduct=createProduct














