const axios = require("axios")



const getMemes= async function(req,res){

    try{

    let options={
        method:"get",
        url:`https://api.imgflip.com/get_memes`

    }

    let result=await axios(options)// await axios(url:-----------) 

    let data =result.data

    res.send({msg:data,status:true}).status(200)

      }


      catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }


}


const createMemes =async function (req,res){
    try{


        let Template_id=req.query.template_id
        let Text0= req.query.text0
        let Text1=req.query.text1
        let Username= req.query.username
        let Password= req.query.password


        console.log(Template_id,Text0,Text1,Username,Password)
            


        let options={
            method:"get",
            url:`https://api.imgflip.com/caption_image?template_id=${Template_id}&text0=${Text0}&text1=${Text1}&username=${Username}&password=${Password}`
    
        }
    
        let result=await axios(options)// await axios(url:-----------) 
    
        let data =result.data
    
        res.send({msg:data,status:true}).status(200)
    
          }
    
    
          catch (err) {
            console.log(err)
            res.status(500).send({ msg: err.message })
        }
    



    



}





module.exports.getMemes=getMemes
module.exports.createMemes=createMemes

