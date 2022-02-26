const express = require('express');
const { route } = require('express/lib/application');
const { append } = require('express/lib/response');
const router = express.Router();

router.post('/test-me', function (req, res) {

    
    let arr=[12,'function up ',34,'chandan']

    let ele =req.body.element // isme data aaega 
    arr.push(ele)

    
    // res.send{(msg:arr,status: true)} iska mtlb puchna hai 
    res.send('My first ever api!')
});

module.exports = router;




router.post('/post4',function(req,res){


 })

 router.get('/link1',function (req,res){
    let arr=[33,34,35,37,38]
    const n=arr.length+1
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    const first =arr[0]
    const last =arr.pop()
    const total=n*(first+last)/2
    const missingNum2=total-sum
    console.log(missingNum2)

    res.send(  { data: missingNumber  }  )

 })
 

 