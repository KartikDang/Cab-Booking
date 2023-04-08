import express from "express";
import mysql from "mysql";
const app = express();
import bodyparser from "body-parser";
app.use(express.json());
import cors from "cors";
import { v4 as uuidv4 } from 'uuid';

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors());

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

app.post("/loginUser",(req,res)=>{

    const email = req.body.email;
    const password = req.body.password;
    // console.log(req.body);
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
            console.log(result[0].Password);
            if(result[0].Password == password){
                res.status(200).send("Login Successful");
            }else{
                res.status(300).send("Wrong Password");
            }
        }
    })
})

app.post("/registerUser",(req,res)=>{
    const id = uuidv4();
    const name = req.body.Name;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.contact;

    const q = "INSERT INTO user (user_id,Name,Email,Password) VALUES (?,?,?,?)";

    db.query(q,[id,name,email,password],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send('Error in database');
        }else{
            console.log("Inserted Successfully");
            res.status(200).send("Registration Complete");
        }
    })

})

app.post("/registerDriver",(req,res)=>{
    const id = uuidv4();
    const name = req.body.
})




app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})