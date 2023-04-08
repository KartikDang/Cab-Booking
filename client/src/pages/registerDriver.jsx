import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import "./login.css";
import axios from 'axios';
import "./registerDriver.css";
import BasicButtonExample from '../components/dropDown';

export const RegisterDriver = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [Name, setName] = React.useState("");
    const [contact, setContact] = React.useState("");
    const [confirmPass, setConfirmPass] = React.useState("");
    const [LicNo, setLicNo] = React.useState("");
    const [make, setMake] = React.useState();
    const [RegNo, setRegNo] = React.useState();
    const [Type,setType] = React.useState();


    async function handleSubmit(e) {
        console.log({ email, password, Name, contact,make,RegNo,Type });
        e.preventDefault();

        if(email==="" || password==="" || Name==="" || contact==="" || make==="" || RegNo==="" || Type===""){
            alert("Please fill all the fields");
        }
        
        if (confirmPass !== password) {
            alert("Password and Confirm Password do not match");
        }

        if(Type!="Micro"&&Type!="Mini"&&Type!="Prime"&&Type!="SUV"){
            alert("Please select a valid car type");
        }

        // await fetch('http://localhost:8080/registerUser', {
        //     mode: 'cors',
        //     method: 'POST',
        //     headers: {
        //         // 'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ email, password, Name, contact })
        // }).then(res => {
        //     if (res.ok) {
        //         window.location.href = '/login';
        //     } else {
        //         console.log('Cannot Enter Data');
        //     }
        // })
        //     .catch(err => {
        //         console.log(err);
        //         console.log('Unexpected Error Occured');
        //     })


        // await axios({
        //     method: 'post',
        //     url: 'http://localhost:8080/login',
        //     withCredentials: false,
        //     headers: {
        //         'Access-Control-Allow-Origin': '*',
        //         'Content-Type': 'application/json',
        //     },
        //     data: {
        //         email: email,
        //         password: password
        //     }
        // })
        // .then(res=>{
        //     console.log(res);
        // })
    }

    return (
        <div>
            {/* NAVBAR */}
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <div>
                        {/* <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"> */}
                        <Link to="/" className=" d-flex align-items-center gap-1 navbar-brand nav-login">
                            <h3>Cab Service</h3>
                        </Link>
                    </div>
                </div>
            </nav>

            <div className="Auth-form-container">
                <form className="Auth-form driverRegister">


                    <div className="partDivided">


                        <div className="partone part">


                            <h3 className="Auth-form-title">Personal Information</h3>
                            <div className="Auth-form-content">
                                <div className="form-group mt-3">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        className="form-control mt-1"
                                        placeholder="Full Name"
                                        onChange={(e) => { setName(e.target.value) }}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Contact</label>
                                    <input
                                        type="text"
                                        className="form-control mt-1"
                                        placeholder="Contact Number"
                                        onChange={(e) => { setContact(e.target.value) }}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Email address</label>
                                    <input
                                        type="email"
                                        className="form-control mt-1"
                                        placeholder="Enter email"
                                        onChange={(e) => { setEmail(e.target.value) }}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label>License Number</label>
                                    <input
                                        type="email"
                                        className="form-control mt-1"
                                        placeholder="License Number"
                                        onChange={(e) => { setLicNo(e.target.value) }}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control mt-1"
                                        placeholder="Password"
                                        onChange={(e) => { setPassword(e.target.value) }}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control mt-1"
                                        placeholder="Confirm Password"
                                        onChange={(e) => { setConfirmPass(e.target.value) }}
                                    />
                                </div>

                            </div>

                        </div>

                        <div className="parttwo part">

                            <h3 className="Auth-form-title">Car Information</h3>
                            <div className="Auth-form-content">
                                <div className="form-group mt-3">
                                    <label>Model</label>
                                    <input
                                        type="text"
                                        className="form-control mt-1"
                                        placeholder="Make and Model"
                                        onChange={(e) => { setMake(e.target.value) }}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Registration Number</label>
                                    <input
                                        type="text"
                                        className="form-control mt-1"
                                        placeholder="Registration Number"
                                        onChange={(e) => { setRegNo(e.target.value) }}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    {/* <label>Type</label> */}
                                    <label>Type</label>
                                    <label>(Micro/Mini/Prime/SUV)</label>
                                    <input
                                        type="text"
                                        className="form-control mt-1"
                                        placeholder="Type"
                                        onChange={(e) => { setType(e.target.value) }}
                                    />
                                    {/* <BasicButtonExample /> */}
                                    {/* <input
                                    type="dr"
                                    className="form-control mt-1"
                                    placeholder="Enter email"
                                    onChange={(e) => { setEmail(e.target.value) }}
                                /> */}
                                </div>
                                {/* <div className="form-group mt-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Password"
                                    onChange={(e) => { setPassword(e.target.value) }}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Confirm Password"
                                    onChange={(e) => { setConfirmPass(e.target.value) }}
                                />
                            </div> */}

                            </div>


                        </div>

                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary submitbtn registerSubmitBtn" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>


                    {/* <p className="forgot-password text-right mt-2">
                            Forgot password?
                        </p> */}
                    {/* </div> */}
                </form>
            </div>
        </div>
    );
}

// export default RegisterDriver;
