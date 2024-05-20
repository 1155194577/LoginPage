const express = require("express")
const app = express()
const cors = require("cors")
const  mysql =require("mysql2")
var crypto = require('crypto')
const { error } = require("console")
const { resolveSoa } = require("dns")


const url = "http://localhost:3001";
app.use(express.json())

app.use(
    cors({
        origin : url,
    }) 
)


function authentication(username,password,res) {
    con.connect(function(err) {
        if (err) {
            throw error;
        };
        const query1 = `SELECT * FROM table1 WHERE user_name = '${username}' AND user_password = '${password}' `
        con.query(query1, function (err, result, fields) {
              if (err) {
                    res.status(500).json({error:"error in db"})
                    return; 
              };

              if (!result.length){
                    console.log("Username/Password not found!")
                    res.status(200).json({ Correct: false })
                    return; 
                }
              else {
                console.log("found!")
                console.log(result);
                res.status(200).json({ Correct: true })
                return; 
              }  
            });
              }); 
    }

app.post("/postdata",(req,res)=>{
    const up_pair = req.body
    console.log(up_pair)
    authentication(up_pair["Username"],up_pair["Userpassword"],res)
})

var con = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'aB..23868836',
        database:'data'
    }
    ); 

// this code shows all username-password at frontend 
con.connect(function(err) {
        if (err) throw err;
        const query1 = "SELECT * FROM table1"
        con.query(query1, function (err, result, fields) {
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

