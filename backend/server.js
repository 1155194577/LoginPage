const express = require("express")
const app = express()
const cors = require("cors")

const url = "http://localhost:3001";
app.use(
    cors({
        origin : url,
    })
)

app.get("/api",(req,res)=>{
    res.json(
       [{key:0,name:"johnny",age:15},{key:1,name:"ben",age:26}]
      
    )
})

app.listen(5001,()=>{
    console.log("listening on 5001!"); 
})

