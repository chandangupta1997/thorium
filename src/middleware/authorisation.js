
const jwt =require("jsonwebtoken")



/*const authorise =function (req,res,){
  let token =req.header.["x-auth-toke"]
  let decodedToken= jsonWebtoken.verify(token)


  let realOne= decodedToken.userId // )
  if(!req.param.userId=realOne)
  return("error")





}*/


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request-:
  
    //userId for which the request is made. In this case message to be posted.
    let userToBeModified = req.params.userId
    //userId for the logged-in user
    let userLoggedIn = decodedToken.userId
  
    //userId comparision to check if the logged-in user is requesting for their own data
    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
  
    let user = userModel.findById(req.params.userId)
    if(!user) return res.send({status: false, msg: 'No such user exists'})
    next()
  }





module.exports.authorise=authorise

// inshort   if(!req.params.userId=decodedToken.userId)