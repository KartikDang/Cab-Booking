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

app.post("/login",(req,res)=>{

    const email = req.body.email;
    const password = req.body.password;


    const q = "SELECT * from users where email = ?";

    db.query(q,[email],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send('Error in database');   
        }else if(result.length === 0){
            res.status(400).send('Email not found');
        }else{
            var flag = 0;
            results.map((e)=>{
                if(e.password===password){
                    res.send("Login Successful");
                    flag = 1;
                }
            })

            if(flag===0){
                res.send("Wrong Password");
            }
        }
    })
})




app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})