let axios = require("axios") // main dependencies 


const londonWeather=  async function(req,res){



    try {
        let options = {
            method: 'get',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=918e43bcac6faae8c5cf1738af93707f'
        }
        let result = await axios(options);
        
        let data = result.data

        let onlyTemp=data.temp


        console.log(result,"gap",onlyTemp)
        res.status(200).send({ msg: data,msgo:onlyTemp, status: true ,})


        
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}




    





module.exports.londonWeather=londonWeather

