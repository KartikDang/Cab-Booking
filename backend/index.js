import express from "express";
import mysql from "mysql";
const app = express();


const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"admin",
    database:"test",
});


app.get("/",(req,res)=>{

    res.json("Hello World");
})


app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})