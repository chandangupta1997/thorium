const require



const midWare = async function(req,res,next){

    if(!req.header.IsFreeAppUser)  
    res.send("header not persent ")
    

    

}






modules.exports.midWare= midWare