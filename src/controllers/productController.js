const productModel = require('../models/productModel')






const createProduct = async function (req, res) {



    try{
    let productDetails = req.body
    let productCreated = await productModel.create(productDetails)
    res.send({ data: productCreated})

    }


    catch(error){
        res.send(error.message)
    }
}

module.exports.createProduct = createProduct