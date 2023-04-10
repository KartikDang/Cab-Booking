import React from 'react';
import { Link } from 'react-router-dom';
import { LightningLoader } from '../components/loader';

const CurrentRide = (props) => {

    const [isLoaded, setIsLoaded] = React.useState(false);
    const [ride, setRide] = React.useState([]);
    const [user_id, setUser_id] = React.useState("");

    const [pickup_location, setPickup_location] = React.useState("");
    const [drop_location, setDrop_location] = React.useState("");
    const [Name, setName] = React.useState("");
    const [Contact, setContact] = React.useState("");
    const [type, setType] = React.useState("");
    const [RegNo, setRegNo] = React.useState("");
    const [make, setMake] = React.useState("");
    const [cost, setCost] = React.useState();
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
                setUser_id(data[0].user_id);
                // setIsLoaded(true);
                return data[0];
            })
        })

        // const user_id = user.user_id;
        // console.log(user);

        const result = await fetch("http://localhost:8080/retrieveCurrentRide", {
            mode: 'cors',
            method: 'POST',
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user_id })
        }).then(res => {
            res.json().then(data => {
                console.log(data);
                // setRide(data[0]);
                setPickup_location(data[0].pickup_location);
                setDrop_location(data[0].destination);
                setName(data[0].name);
                setContact(data[0].contact);
                setType(data[0].type);
                setRegNo(data[0].Reg_No);
                setMake(data[0].model);
                setCost(data[0].estimatedcost);
                setIsLoaded(true);
                return data[0];
            })
        })


        console.log(ride);
    }


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
                                    value={pickup_location}
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
                                    value={drop_location}
                                    readOnly
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Driver Name</label>
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Driver Name"
                                    value={Name}
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
                                    value={make}
                                    readOnly
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Registration Number</label>
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Number"
                                    value={RegNo}
                                    // onChange={(e) => { setDrop(e.target.value) }}
                                    readOnly
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Cost</label>
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Cost"
                                    value={cost}
                                    // onChange={(e) => { setDrop(e.target.value) }}
                                    readOnly
                                />
                            </div>

                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-danger cancelbtn"
                                    style={{ width: "100%", marginTop: "2%" }}
                                    // onClick={handleSubmit}
                                    onClick={handleClick}
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
