const express = require("express")
const app = express()
const cors = require("cors")
const  mysql =require("mysql2")

const url = "http://localhost:3001";
app.use(express.json())

app.use(
    cors({
        origin : url,
    })
)

app.post("/postdata",(req,res)=>{
    console.log(req.body)   
    res.send("posted to server"); 
})

var con = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'aB..23868836',
        database:'data'
    }
    ); 

con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM table1", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
          app.get("/api",(req,res)=>{res.json(result)})
        });
          });

//app.get("/api",(req,res)=>{
 //   res.json(
       //dummy : [{key:0,name:"johnny",age:15},{key:1,name:"ben",age:26}]
      
   // )
//})

app.listen(5001,()=>{
    console.log("listening on 5001!"); 
})

// POST /login gets urlencoded bodies
