const mongoose = require('mongoose');

/*const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    tags: [String],
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    sales: {type: Number, default: 10}
}, { timestamps: true });*/

//module.exports = mongoose.model('Book', bookSchema) //users

//bookSChema mai new moongoose schema bnao 
// aur mongoose ek program hai jo express ko database se connect krta hai 
const bookSchema=new mongoose.Schema({ 
    
    bookName:{type:String,
        required:true},// mandatory 
    price:{indianPrice:Number,
    europePrice:Number},
    Year:{type:String,
        default:2021},
    tags:[String],
    totalpages:Number,
    stockAvailable:Boolean
    

})
module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
