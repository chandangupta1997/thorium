const express = require('express');
const router = express.Router();




router.get('/test-me3', function (req, res) {
    res.send('My first ever api!')
});

module.exports = router;




// ASSIGNMENT:
// you will be given an array of persons ( i.e an array of objects )..each person will have  a {name: String , age: Number, votingStatus: true/false(Boolean)}
// take input in query param as votingAge..and for all the people above that age, change votingStatus as true
// also return an array consisting of only the person that can vote

//  take this as sample for array of persons:
let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
},
{
    name: "SK",
    age: 20,
    votingStatus: false
},
{
    name: "AA",
    age: 70,
    votingStatus: false
},
{
    name: "SC",
    age: 5,
    votingStatus: false
},
{
    name: "HO",
    age: 40,
    votingStatus: false
}
]


//router.post('/linkquery',function(req,res){


    /*let age =req.query.votingage //age mai inputage likhenge jo query mai voting age ke naam se deni hai 
    let eliVoterList=[] // for saving qualified people who are qualified for voting 
    for(i=0;i<=persons.length;i++){
        if(age=>18){
            persons.votingStatus=true;
            eliVoterList.push[i.name]

        }

    }
    res.send(eliVoterList)*/

    
     
    

//})


router.post('/myquery',function(req,res){
    let votingAge = req.query.age
    let voterList =[];
    for(let i = 0;i<persons.length;i++){
        if(persons[i].age>votingAge){
            persons[i].votingStatus = true;
            voterList.push(persons[i].name)
        }
    }
    res.send([voterList])

})
    
