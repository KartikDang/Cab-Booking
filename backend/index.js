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
    user: "root",
    password: "admin",
    database: "cabdb",
});


app.get("/", (req, res) => {
    // res.json("Hello World");
    const q = "SELECT * FROM dept2";
    db.query(q, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
})

app.post("/loginUser", (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body);
    const q = "SELECT * from user where email = ?";

    db.query(q, [email], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error in database');
        } else if (result.length === 0) {
            res.status(400).send('Email not found');
        } else {
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
            if (result[0].Password == password) {
                res.status(200).send("Login Successful");
                console.log(result[0].user_id);
                const q = "INSERT INTO user_session (user_id) VALUES (?)";
                db.query(q, [result[0].user_id], (err, result) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send('Error in database');
                    } else {
                        console.log("Inserted Successfully to current Session Table");
                    }
                });

            } else {
                res.status(300).send("Wrong Password");
            }
        }
    })
})


app.get("/retrieveCurrentUser", (req, res) => {
    const q = "SELECT * FROM user_session";
    var user_id;
    db.query(q, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            // res.json(result);
            const q2 = "SELECT * FROM user where user_id = ?";
            db.query(q2, [result[0].user_id], (err, result) => {
                if (err) {
                    console.log(err);
                    res.json(err);
                } else {
                    // console.log(result);
                    res.json(result);
                }
            });
        }
    });
    // console.log(user_id);


})

app.get("/retrieveCurrentDriver", (req, res) => {
    const q = "SELECT * FROM driver_session";
    var driver_id;

    db.query(q, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            // res.json(result);
            const q2 = "SELECT * FROM driver where driver_id = ?";
            db.query(q2, [result[0].driver_id], (err, result) => {
                if (err) {
                    console.log(err);
                    res.json(err);
                } else {
                    // console.log(result);
                    res.json(result);
                }
            });
        }
    });
})

app.post("/registerUser", (req, res) => {
    const id = uuidv4();
    const name = req.body.Name;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.contact;

    const q = "INSERT INTO user (user_id,Name,Password,email,Contact) VALUES (?,?,?,?,?)";

    db.query(q, [id, name, password, email, phone], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error in database');
        } else {
            console.log("Inserted Successfully");
            res.status(200).send("Registration Complete");
        }
    })

})

app.post("/registerDriver", (req, res) => {
    const driver_id = uuidv4();
    const cab_id = uuidv4();
    const name = req.body.Name;
    const email = req.body.email;
    const password = req.body.password;
    const contact = req.body.contact;
    const model = req.body.make;
    const type = req.body.Type;
    const Reg_No = req.body.RegNo;
    const license_no = req.body.LicNo;

    const driver_q = "INSERT INTO DRIVER (driver_id,email,license_no,password,name,contact,cab_id) VALUES (?,?,?,?,?,?,?)";
    const cab_q = "INSERT INTO CAB (cab_id,type,model,Reg_No) VALUES (?,?,?,?)";

    var flagDriver = 0;
    var flagCab = 0;

    db.query(cab_q, [cab_id, type, model, Reg_No], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error in database');
        } else {
            flagCab = 1;
            console.log("Inserted Successfully into Cab Table");
        }
    })

    db.query(driver_q, [driver_id, email, license_no, password, name, contact, cab_id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error in database');
        } else {
            flagDriver = 1;
            console.log("Inserted Successfully into Driver Table");
        }
    })

    console.log({ flagCab, flagDriver })

    res.status(200).send("Registration Complete");
})


app.post('/loginDriver', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body);
    const q = "SELECT * from driver where email = ?";

    db.query(q, [email], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error in database');
        } else if (result.length === 0) {
            res.status(400).send('Email not found');
        } else {
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
            console.log(result[0].password);
            if (result[0].password == password) {
                const q2 = "INSERT INTO driver_session (driver_id) VALUES (?)";
                db.query(q2, [result[0].driver_id], (err, result) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send('Error in database');
                    } else {
                        console.log("Inserted Successfully");
                        res.status(200).send("Login Successful");
                    }
                })

                console.log(result);

            } else {
                res.status(300).send("Wrong Password");
            }
        }
    })
})

// app.get("/retrieveCurrentDriver", (req, res) => {
//     const q = "SELECT * FROM driver_session";
//     var driver_id;




app.post("/updateUser", (req, res) => {
    const id = req.body.user_id;
    const name = req.body.Name;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.contact;

    console.log({ id, name, email, password, phone });
    const q = "UPDATE user SET Name = ?, Password = ?,email = ?,Contact = ? WHERE user_id = ?";


    db.query(q, [name, password, email, phone, id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error in database');
        } else {
            console.log("Updated Successfully");
            console.log(result);
            res.status(200).send("Update Complete");
        }
    })
})

app.post("/updateDriver", (req, res) => {

    const driver_id = req.body.driver_id;
    const name = req.body.Name;
    const email = req.body.email;
    const password = req.body.password;
    const contact = req.body.contact;

    console.log({ driver_id, name, email, password, contact });

    const q = "UPDATE driver SET name = ?, password = ?,email = ?,contact = ? WHERE driver_id = ?";

    db.query(q, [name, password, email, contact, driver_id], (err, result) => {

        if (err) {
            console.log(err);
            res.status(500).send('Error in database');
        } else {
            console.log("Updated Successfully");
            console.log(result);
            res.status(200).send("Update Complete");
        }
    })
})

app.post("/retrieveCab",(req,res)=>{
    const cab_id = req.body.cab_id;
    console.log(cab_id);
    const q = "SELECT * FROM cab WHERE cab_id = ?";

    db.query(q,[cab_id],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send('Error in database');
        }else{
            console.log(result);
            res.status(200).send(result);
        }
    })
})

app.post('/updateStatus', (req, res) => {
    const cab_id = req.body.cab_id;
    const status = req.body.status;
    console.log({ cab_id, status });

    const q = "UPDATE cab SET status = ? WHERE cab_id = ?";

    db.query(q, [status, cab_id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error in database');
        } else {
            console.log("Updated Successfully");
            console.log(result);
            res.status(200).send("Update Complete");
        }
    })
})

app.get('/allcustomers', (req, res) => {
    const q = "SELECT * FROM user";

    db.query(q,(err,result)=>{
        if(err){
            res.status(500).send('Error in database');
        }else{
            console.log(result);
            res.status(200).send(result);
        }
    })
})

app.get('/alldrivers', (req, res) => {
    const q = "SELECT * FROM driver natural join cab";

    db.query(q,(err,result)=>{
        if(err){
            res.status(500).send('Error in database');
        }else{
            console.log(result);
            res.status(200).send(result);
        }
    })
})  


app.post('/getFare',(req,res)=>{
    const type = req.body.type;

    const q = 'SELECT * FROM FARE WHERE TYPE = ?';
    db.query(q,[type],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send('Error in database');
        }else{
            console.log(result);
            res.status(200).send(result);
        }
    })

})


app.post('/bookCabUserRequest',(req,res)=>{
    const Booking_id = uuidv4();
    const user_id = req.body.user_id;
    const pickup = req.body.pickup;
    const drop = req.body.drop;
    const status = req.body.status;
    const distance = req.body.distance;
    const estimatedCost = req.body.estimatedCost;
    const type = req.body.type;

    console.log({Booking_id,user_id,pickup,drop,status,distance,estimatedCost});

    const q = "INSERT INTO booking (Booking_id,user_id,pickup_location,destination,status,distance,estimatedCost) VALUES (?,?,?,?,?,?,?)";
    db.query(q,[Booking_id,user_id,pickup,drop,status,distance,estimatedCost],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send('Error in database');
        }else{
            console.log("Inserted Successfully");
            // res.status(200).send("Booking Successful");
        }
    })

    const q2 = "Select driver_id,name,contact,model,type from driver natural join cab where type = ? and status = 'available'";

    db.query(q2,[type],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send('Error in database');
        }else{
            console.log(result);
            res.status(200).send(result);
        }
    })
    
})

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})