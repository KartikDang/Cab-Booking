import React from 'react';
import { Link } from 'react-router-dom';
import Map from './Maps';
import "./book.css";

const Book = () => {

    const [type, setType] = React.useState("");
    const [ pickup , setPickup ] = React.useState("");
    const [ drop, setDrop ] = React.useState("");
    // const 

    const [distance, setDistance] = React.useState(21);
    const [estimatedCost,setEstimatedCost] = React.useState();
    // console.log({pickup,drop,radioOption});

    async function handleSubmit(e){
        e.preventDefault();
        console.log({pickup,drop,type});

        if(pickup==""||drop==""||type==""){
            alert("Please fill all the fields");
        }

        // Obtain Fare

        await fetch('http://localhost:8080/getFare',{
            mode:'cors',
            method: 'POST',
            headers:{
                // 'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({type})
        }).then(res=>{
            res.json().then(data=>{
                console.log(data);
                setEstimatedCost(data[0].Fare*distance);
            })
        })

        // await fetch('http://localhost:8080/book',{
        //     mode:'cors',
        //     method: 'POST',
        //     headers:{
        //         // 'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body:JSON.stringify({pickup,drop,type})
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
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Pickup"
                                onChange={(e) => { setPickup(e.target.value) }}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Drop Location</label>
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Drop"
                                onChange={(e) => { setDrop(e.target.value) }}
                                />
                            </div>

                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Micro"
                                    onChange={(e) => { setType(e.target.value) }}
                                />
                                <label class="form-check-label" for="inlineRadio1">Micro</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Mini"
                                    onChange={(e) => { setType(e.target.value) }}
                                />
                                <label class="form-check-label" for="inlineRadio2">Mini</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Prime"
                                    onChange={(e) => { setType(e.target.value) }}
                                />
                                <label class="form-check-label" for="inlineRadio3">Prime</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="SUV"
                                    onChange={(e) => { setType(e.target.value) }}
                                />
                                <label class="form-check-label" for="inlineRadio3">SUV</label>
                            </div>

                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary submitbtn"
                                onClick={handleSubmit}
                                >
                                    Book Cab
                                </button>
                            </div>
                            <hr />
                            <p className="forgot-password text-left mt-2">
                                <b>Distance</b> : {distance} km
                            </p>
                            <p className="forgot-password text-left mt-2">
                                <b>Expected Fare</b> : {estimatedCost} Rs
                            </p>
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
