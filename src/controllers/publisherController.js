const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")



const createPublisher= async function (req, res) {
    let author = req.body
    let publisherCreated = await AuthorModel.create(author)
    res.send({data: publisherCreated})
}


const getPublisherData= async function (req, res) {
    
    let publisherData = await publisherModel.model(find)
    res.send({data: publisherData})
}




module.exports.createPublisher= createPublisher
module.exports.getPublisherData=getPublisherData


