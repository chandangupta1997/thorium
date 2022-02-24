const express = require('express');
const router = express.Router();




router.get('/test-me2', function (req, res) {
    res.send('My first ever api!')
});

//module.exports = router;


const express = require('express');
const router = express.Router();
const arrmovies=['ironman','batman','spiderman','superman']
const arrmoviesind=['dabang','murder','race2',]
router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

//module.exports = router;

//Create an API for GET /movies that returns a list of movies. 
//Define an array of movies in your code and return the value in response.
router.get('/movies',function(req,res){

    res.send(arrmovies)

})




//Create an API GET movies/indexNumber
// (For example GET /movies/1 is a valid request and
// it should return the movie in your array at index 1). 
//You can define an array of movies again in your api

/*router.get('/moviesindia/:index',function(req,res){
    let value =req.params.index;
    console.log(index)
    res.send(arrmoviesind)



})*/

/*router.get('/movies/:movieID',function(req,res){
    let movindia=['dabang','murder','race2',]
    let value =req.params.movieID;//main syntax for path parameter of index parameter
    console.log(movindia)
    res.send(arrmovies)
})*/


/*router.get('/movies:/index',function(req,res){
    let value =req.params.movieID;

})*/



//3. handling special cases of invalid syntax 
router.get('/movies"/movieID',function(req,res){
    let Mov=["fukrey",'delhi','dabang','rockstar','suryavanshi']
    let value =req,params,movieID;
    if(value>Mov.length-1){
        res.send("doesn not exist ")
    }
    else{
        res.send(mov[value])
    }
    

}) //special movie index




module.exports = router;


//4. movies from an object 

router.get('/films/:filmid',function(req,res){
    let movi=[{id:1,name : 'the shutter island'},{id:2,name:"world war z"},{id:3,name :'bazigar'}]
    let value =req,params,filmid;
    let found =false;
    for(i=0;i<movi.length;i++){
        if (movi[i].id==value){
            found=true
            res.send(movi[i])
            break
        }
    }
    if(found==false){
        //console.log(found)
        res.send("no movie exists with this id ")
    }
})


module.exports = router;




