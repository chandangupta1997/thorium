const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use( function (req,res,next){
    //let current_datetime=new Date();
   /// let formatted_date=current_datetime.getFullYear() +
    //"_"+
   // (current_datetime.getMonth()+1)+
   // current_datetime.getDate()+
    
   // current_datetime.getHours()+

    //current_datetime.getMinutes()+
   // current_datetime.getSeconds();
   let socket =req.socket.remoteAddress // inbuild 

    let url=req.url;

    //let log =`[${formatted_date}]${method}:${url}}`


    
    console.log(socket,url,)

    
    res.send({msg:"you are in global middleware "})
   next()
})
8

//app.use("/semiware",)


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
