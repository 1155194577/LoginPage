const express = require("express")
const app = express()
const cors = require("cors")

app.use(
    cors({
        origin : "http://localhost:3001" ,
    })
)

app.get("/api",(req,res)=>{
    res.json(
       [ {name:"johnny",age:15},{name:"ben",age:26}]
      
    )
})

app.listen(5001,()=>{
    console.log("listening on 5001!"); 
})

