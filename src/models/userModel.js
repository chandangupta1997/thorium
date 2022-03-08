const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {


    
//_id: ObjectId("61951bfa4d9fe0d34da86344"),
//userId: “61951bfa4d9fe0d34da86829”,  means user model & product model 
// is connected to product  model and order model via ref,pop

//productId: “61951bfa4d9fe0d34da86344”
amount: Number,
isFreeAppUser: true, 
date:Date



}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array