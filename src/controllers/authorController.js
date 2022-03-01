const { count } = require("console")
const authorModel = require("../models/authorModel")
const BookModel= require("../models/bookModel")





const createAuthor=async function (req,res){
    let authorData=req.body
    let savedAuthordata=await authorModel.create(authorData)
    res.send({msg:savedAuthordata})
}



const getAuthorData= async function(req,res){
    let allAuthorsData=await authorModel.find()
    res.send({msg:allAuthorsData})            // question 
}




module.exports.createAuthor=createAuthor
module.exports.getAuthorData=getAuthorData