let axios = require("axios") // main dependencies 


const londonWeather=  async function(req,res){



    try {
        let options = {
            method: 'get',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=918e43bcac6faae8c5cf1738af93707f'
        }
        let result = await axios(options);
        
        let data = result.data

        let onlyTemp=data.main.temp  // for Only Temp 




        console.log(result,"gap",onlyTemp)


        res.status(200).send({ msg: data,msgo:onlyTemp, status: true ,})


        
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


const arrayWeather=  async function(req,res){

    try{ 
        let city =["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let id =req.query.appId

        let finalCity=[]

        for(let i=0;i<city.length;i++){

            let options =await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=${id}`)
            finalCity[i]={city:city[i],temp:options.data.main.temp}
        }

        sortedCity=finalCity.sort(function(a,b){return a.temp-b.temp})

        res.status(200).send({msg:finalCity})



    }


    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }




















}







        


    





module.exports.londonWeather=londonWeather
module.exports.arrayWeather=arrayWeather

