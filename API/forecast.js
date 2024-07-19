const request = require("request");

const forecast=(latitude,longitude,callback)=>{

  const url="http://api.weatherapi.com/v1/current.json?key=ba6d6c644d2a4ef79d7115723241707&q="+ latitude + "," + longitude
  request({url,json:true},(error,response)=>{
    if(error){
      callback("unable to connect weather api service",undefined)
    }else if(response.body.error){
      callback(response.body.error.message,undefined)
    }else{
      callback(undefined,response.body.location.name + " it is " + response.body.current.condition.text + " and temp is " + response.body.current.temp_c)
    }
  })
  }

module.exports=forecast
