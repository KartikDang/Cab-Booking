import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./login.css";
import axios from 'axios';
import "./loginOption.css";


export const LoginOption = () => {

    return (

        <div className="optionPage">

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

            <div className="title" style={{textAlign:"center",marginTop:"2vh"}}>
                <h1>
                    LOGIN PAGE
                </h1>
            </div>

            <div className="d-grid gap-2 mt-3 btn-container" >
                <button type="submit" className="btn btn-primary submitbtn" >
                    <Link to='/loginUser'>
                        <div className="text">
                            Customer Login
                        </div>
                    </Link>
                </button>



                <button type="submit" className="btn btn-primary submitbtn" >
                    <Link to='/loginDriver'>
                        <div className="text">
                            Driver Login
                        </div>
                    </Link>
                </button>

            </div>
        </div >
    )
}