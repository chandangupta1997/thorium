const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let authorId = book.author                         
    let publisherId = book.publisher
    let 



    // ye sara hme bookModel mai hi check krna hai as per question number 3 .

    //validation a
    if(!authorId) return res.send('The request is not valid as the author details are required.')

    //validation b
    let author = await authorModel.findById(authorId)
    if(!author) return res.send('The request is not valid as no author is present with the given author id')

    //validation c
    if(!publisherId) return res.send('The request is not valid as the publisher details are required.') 

    //validation d
    let publisher = await publisherModel.findById(publisherId)
    if(!publisher) return res.send('The request is not valid as no publisher is present with the given publisher id')

    let bookCreated = await bookModel.create(book)
    return res.send({data: bookCreated})
}

const getBooks= async function (req, res) {
    let books = await bookModel.find().populate('author publisher')
    res.send({data: books})
}



//updatedBooks = await bookModel.updateOne({}, {}, {})


 // bookModel.Update()


/*const updateBookData = async function (req, res) {
    let publisherId= await publisherModel.find({publisherName:{$in:["HarperCollins", "Penguin"]}}).select({_id:1})
  
    let arr=[]
    arr=publisherId.map(x => x._id)
  
    let data= await bookModel.updateMany(
      {publisher:{$in:arr}},
      {$set: {isHardCover:true} },
      { new:true })  
    res.send(data)
  
  }*/


const updateBookData= async function (res,req){
  let publisherId =await publisherModel.find({publisherName:{$in:["HarperCollins","Penguin"]}}).select({_id:1})
  let arr=[];
  arr =publisherId.map(x=>x._id)
  let data =await bookModel.updateMany(
    {publisher:{$in:arr}},
    {$set:{isHardCover:true}},
    {new:true})
    res.send(data)
  }



  const updateBookByRating=async function (res,req){
    let publisherId =await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
    let arr=[];

    // bookmodel.updateMany(
      //{rating:{arr}},
      //{set:}
      //  { ratings : { $gt : 3.5 }} ,
      //{$inc : {price : + 10 } },

    //)
  }



module.exports.createBook= createBook
module.exports.getBooks= getBooks

module.exports.updateBookData=updateBookData


//module.exports.updateBooks=updateBooks



