import React from 'react';
import { Link } from 'react-router-dom';

const Feedback = () => {
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

                    {/* 
                    <Col lg="6" md="6" sm="6">
                        <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                            <Link to="/login" className=" d-flex align-items-center gap-1">
                                <i class="ri-login-circle-line"></i>
                                <button type="button" class="btn btn-outline-secondary btn-out">Login</button>
                            </Link>

                            <Link to="/register" className=" d-flex align-items-center gap-1">
                                <i class="ri-user-line"></i>
                                <button type="button" class="btn btn-outline-light btn-out">Register</button>
                            </Link>
                        </div>
                    </Col> */}
                    <div className="profile">
                        <div className="pastRides">
                            <Link to='/pastRides' className='profile-icon'>
                                <i class="ri-taxi-line"></i>
                            </Link>
                        </div>
                        <div className="user">
                            <Link to="/profileUser" className='profile-icon'>
                                <i class="ri-user-fill"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Feedback;
