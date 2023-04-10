import React from 'react';
import { Link } from 'react-router-dom';
import Map from './Maps';
import "./book.css";

const Book = () => {

    const [radioOption, setRadioOption] = React.useState("");
    console.log(radioOption);
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

                    <div className="profile">
                        <Link to="/profileUser" className='profile-icon'>
                            <i class="ri-user-fill"></i>
                        </Link>
                    </div>
                </div>
            </nav>


            <div className="bookingWindow">

                <div className="Auth-form-container booking-form">
                    <form className="Auth-form">
                        <div className="Auth-form-content">
                            <h3 className="Auth-form-title">Enter Details To Book A Cab</h3>
                            <div className="form-group mt-3">
                                <label>Pickup Location</label>
                                <input
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Pickup"
                                // onChange={(e) => { setEmail(e.target.value) }}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Drop Location</label>
                                <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Drop"
                                // onChange={(e) => { setPassword(e.target.value) }}
                                />
                            </div>

                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Micro"
                                    onChange={(e) => { setRadioOption(e.target.value) }}
                                />
                                <label class="form-check-label" for="inlineRadio1">Micro</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Mini"
                                    onChange={(e) => { setRadioOption(e.target.value) }}
                                />
                                <label class="form-check-label" for="inlineRadio2">Mini</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Prime"
                                    onChange={(e) => { setRadioOption(e.target.value) }}
                                />
                                <label class="form-check-label" for="inlineRadio3">Prime</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="SUV"
                                    onChange={(e) => { setRadioOption(e.target.value) }}
                                />
                                <label class="form-check-label" for="inlineRadio3">SUV</label>
                            </div>

                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary submitbtn"
                                // onClick={handleSubmit}
                                >
                                    Book Cab
                                </button>
                            </div>
                            {/* <p className="forgot-password text-right mt-2">
                                Forgot password?
                            </p> */}
                        </div>
                    </form>
                </div>

                <div className="Map">
                    {/* <Map /> */}
                    TEST
                </div>
            </div>
        </div>
    );
}

export default Book;
