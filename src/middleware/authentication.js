const authenticate = function(req, req, next) {


   
        let token =req.headers["x-auth-token"]
        if(!token) return res.send({msg:"token must be present"})
    
        let decodedToken = jsonwebtoken.verify(token, "FunctionUp-thorium");
        if(!decodedToken) return res.send({msg:"token is invalid"})
         
    
    //check the token in request header
    //validate this token

    next()
}


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    next()
}