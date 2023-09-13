const mysql=require('mysql');
const express=require('express');
const app=express();
const bodyParser=require('body-parser') ;

app.use(bodyParser.json)
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
 app.get("/display/:id",(req,res)=>{
  con.query("select*from first where id=?",[req.params.id],(err,result,field)=>{
      if(err){
      console.log(err);
      }
      else{
     res.send(result);
      }

  })
});
 app.delete("/display/:id",(req,res)=>{
    con.query("DELETE FROM first WHERE id=?",[req.params.id],(err,result,field)=>{
        if(err){
        console.log(err);
        }
        else{
       res.send("deleted");
        }

    })
 });

