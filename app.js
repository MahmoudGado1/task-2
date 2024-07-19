const forecast=require("./API/forecast")
const geocode=require("./API/geocode")
const country=process.argv[2]
geocode(country,(error,data)=>{
  console.log("Error : ",error)
  console.log("Data : ",data)

  forecast(data.latitude,data.longitude, (error,data)=>{
    console.log("Error : ",error)
    console.log("Data : ",data)
  })
})



