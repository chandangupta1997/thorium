
const express = require('express');
const router = express.Router();
const midwareTokenAuthentication=async function(res,req,next){

let token = jwt.sign(
    {
      userId: user._id.toString(),// payload
      batch: "thorium", 
      organisation: "FUnctionUp",
    },
    "functionup-thorium"  //secret key 
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });

  next()
};


//Write a PUT api /users/<userId> to update user details. 
//Pass the userId as path param in the url and update the attributes received in 
//the request body. Check that request must contain x-auth-token header.
//If absent, return a suitable error.


module.exports.midwareTokenAuthentication=midwareTokenAuthentication