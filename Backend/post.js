const mysql=require('mysql');
const express=require('express');
const app=express();
const bodyParser=require('body-parser') ;

app.use(bodyParser.json())
app.use(express.json())
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root123',
    database:'express'
  })
  con.connect(function(err){
    if(err){
      console.log(err)
    }
    else{
      console.log("connected")
    }
})
 app.listen(3032,()=>console.log("displayed"))
 app.get("/display",(req,res)=>{
    con.query("select*from first",(err,result,field)=>{
        if(err){
        console.log(err);
        }
        else{
       res.send(result);
        }

    })
 });
 app.post("/display",(req,res)=>{
  const data=req.body
  con.query("insert into first set?",data,(err,result,field)=>{
      if(err){
      console.log(err);
      }
      else{
     res.send("posted");
      }

  })
});