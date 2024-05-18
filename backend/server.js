const express = require("express")
const app = express()

app.get("/api",(req,res)=>{
    res.json({"test":"val"})
})

app.listen(5001,()=>{
    console.log("listening on 5001!"); 
})

