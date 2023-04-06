import express from "express";
import mysql from "mysql";
const app = express();


const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"admin",
    database:"new",
});


app.get("/",(req,res)=>{
    // res.json("Hello World");
    const q = "SELECT * FROM dept2";
    db.query(q,(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
})


app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})