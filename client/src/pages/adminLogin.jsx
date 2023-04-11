import React from 'react';
import { Link } from 'react-router-dom';

const AdminLogin = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    

    async function handleSubmit(e) {
        e.preventDefault();
        if(email==="" || password===""){
            alert("Enter all the fields");
        }else if(email=="admin@admin.com"&&password=="admin"){
            window.location.href = '/admin';

        }
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
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Admin Log In</h3>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                                onChange={(e)=>{setEmail(e.target.value)}}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                onChange={(e)=>{setPassword(e.target.value)}}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary submitbtn" onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                        <p className="forgot-password text-right mt-2">
                            Forgot password?
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;
