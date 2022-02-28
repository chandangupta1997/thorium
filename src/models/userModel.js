const mongoose = require('mongoose');

/*const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });*/

module.exports = mongoose.model('User', userSchema) //users

const userSchema =new mongooose.Schema({
    bookName:String,
    authorName:String,
    Category:String,
    year:Number
    
},{timestamps:true})



// String, Number
// Boolean, Object/json, array



/*  const UserModel= require("../models/userModel")

const createBookInfo= async function (req, res) {
    let data= req.body
    let savedBooks= await UserModel.create(data)
    res.send({msg: savedBooks})
}

const getBookInfo= async function (req, res) {
    let allBooks= await UserModel.find()
    res.send({msg: allBooks})
}

module.exports.createBookInfo= createBookInfo
module.exports.getBookInfo= getBookInfo*/