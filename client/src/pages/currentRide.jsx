import React from 'react';
import { Link } from 'react-router-dom';
import { LightningLoader } from '../components/loader';

const CurrentRide = (props) => {

    const [ride, setRide] = React.useState({});

    async function handleLoad(e) {
        const user = await fetch("http://localhost:8080/retrieveCurrentUser", {
            mode: 'cors',
            method: 'GET',
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // body:JSON.stringify({email,password})
        }).then(res => {
            res.json().then(data => {
                console.log(data[0]);
                // setIsLoaded(true);
                return data[0];
            })
        })

        console.log(user);

        const result = await fetch("http://localhost:8080/retrieveCurrentRide", {
            mode: 'cors',
            method: 'POST',
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user_id: user.user_id })
        }).then(res => {
            res.json().then(data => {
                console.log(data[0]);
                setRide(data[0]);
                setIsLoaded(true);
                return data[0];
            })
        })



    }

    const [isLoaded, setIsLoaded] = React.useState(false);

    if (!isLoaded) {
        handleLoad();
        return (
            <div className="loader">
                <LightningLoader />
            </div>
        )
    }


    return (
        <div>
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


            <div className='current-ride'>

                <div className="Auth-form-container ride">


                    <form className="Auth-form">
                        <div className="Auth-form-content">
                            {/* <h3 className="Auth-form-title">Enter Details To Book A Cab</h3> */}
                            <h3 className="Auth-form-title">Current Booking</h3>
                            <div className="form-group mt-3">
                                <label>Pickup Location</label>
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Pickup"
                                    // onChange={(e) => { setPickup(e.target.value) }}
                                    readOnly
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Drop Location</label>
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Drop"
                                    // onChange={(e) => { setDrop(e.target.value) }}
                                    readOnly
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Type</label>
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Type"
                                    // onChange={(e) => { setDrop(e.target.value) }}
                                    readOnly
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Driver Name</label>
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Driver Name"
                                    // onChange={(e) => { setDrop(e.target.value) }}
                                    readOnly
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Car</label>
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Car"
                                    // onChange={(e) => { setDrop(e.target.value) }}
                                    readOnly
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Registration Number</label>
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Number"
                                    // onChange={(e) => { setDrop(e.target.value) }}
                                    readOnly
                                />
                            </div>

                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary submitbtn"
                                // onClick={handleSubmit}
                                >
                                    Cancel Cab
                                </button>
                            </div>
                            {/* <hr />
                            <p className="forgot-password text-left mt-2">
                                <b>Distance</b> km
                            </p>
                            <p className="forgot-password text-left mt-2">
                                <b>Expected Fare</b>  Rs
                            </p> */}
                        </div>
                    </form>
                </div>
            </div>



        </div>
    );
}

export default CurrentRide;
