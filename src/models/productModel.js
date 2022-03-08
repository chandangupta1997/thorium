const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
    //Your product document should look like this


	
	name:String,
	category:String,
	price:{type:Number,
    required:true} //mandatory property

}, { timestamps: true });


module.exports = mongoose.model('Product', productSchema) //users
