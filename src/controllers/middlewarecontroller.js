const express = require('express'); // express connect kr diya 
const router = express.Router(); // router le liya 


const middleware = function(res,req,next){
    console.log("you are in  middle ware ") 
    res.send({msg:"this is a response in middle ware  "})       
    next()         
                                                                
}




module.exports.middleware=middleware                  

