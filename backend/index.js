import express from "express";
import mysql from "mysql";
const app = express();
import bodyparser from "body-parser";

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"admin",
    database:"cabbooking",
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

    console.log(email,password);
    const q = "SELECT * from user where email = ?";

    db.query(q,[email],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send('Error in database');   
        }else if(result.length === 0){
            res.status(400).send('Email not found');
        }else{
            var flag = 0;
            const jsonData = JSON.stringify(result);
            // jsonData.map((e)=>{
            //     console.log(e.password);
            // })

            // if(flag===0){
            //     res.send("Wrong Password");
            // }
            // res.json(result);

            // res.send(result[0].Password);
            if(result[0].Password === password){
                res.send("Login Successful");
            }else{
                res.send("Wrong Password");
            }
        }
    })
})


app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})