import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { LightningLoader } from '../components/loader';
const Feedback = () => {

    // console.log(useParams().id);
    const [option, setOption] = React.useState("");
    const [intOption, setIntOption] = React.useState();
    const [isLoaded, setisLoaded] = React.useState(false);
    const [comments, setComments] = React.useState("");

    const { id } = useParams();
    async function handleSubmit(e) {

        e.preventDefault();
        setIntOption(parseInt(option));
        console.log({ intOption });

        console.log({ intOption, comments, id });

        await fetch("http://localhost:8080/feedback", {
            mode: 'cors',
            method: 'POST',
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ intOption, comments, id })
        }).then(async res => {
            if (res.status == 200) {
                // window.location.href = `/bill/${id}`;
                
                await fetch("http://localhost:8080/createBill",{
                    mode: 'cors',
                    method: 'POST',
                    headers: {
                        // 'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }, 
                    body: JSON.stringify({id})
                }).then(res=>{
                    if(res.status==200){
                        alert('Feedback Submitted. Thanks for your time');
                        window.location.href = `/booking`;
                    }else{
                        alert('Bill Not Cleared');
                    }
                })
            } else {
                alert('Feedback Not Submitted. Try Again');
            }
        })
    }

    // if (!isLoaded) {
    //     handleLoad();
    //     return (
    //         <div className="loader" >
    //             <LightningLoader />
    //         </div>

    //     )

    // }

    return (
        <div>
            {/* NAVBAR */}
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <div>
                        {/* <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"> */}
                        <Link to="/booking" className=" d-flex align-items-center gap-1 navbar-brand nav-login">
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


            <div className="Auth-form-container booking-form">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Feedback</h3>
                        <div className="form-group mt-3">
                            <label>Comments</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Comment"
                                onChange={(e) => { setComments(e.target.value) }}
                            />
                        </div>
                        {/* <div className="form-group mt-3">
                            <label>Drop Location</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Drop"
                                // onChange={(e) => { setDrop(e.target.value) }}
                            />
                        </div> */}

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1"
                                onChange={(e) => { setOption(e.target.value) }}
                            />
                            <label class="form-check-label" for="inlineRadio1">1
                                <i class="ri-star-fill"></i></label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2"
                                onChange={(e) => { setOption(e.target.value) }}
                            />
                            <label class="form-check-label" for="inlineRadio2">2
                                <i class="ri-star-fill"></i></label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3"
                                onChange={(e) => { setOption(e.target.value) }}
                            />
                            <label class="form-check-label" for="inlineRadio3">3
                                <i class="ri-star-fill"></i></label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="4"
                                onChange={(e) => { setOption(e.target.value) }}
                            />
                            <label class="form-check-label" for="inlineRadio3">4
                                <i class="ri-star-fill"></i></label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="5"
                                onChange={(e) => { setOption(e.target.value) }}
                            />
                            <label class="form-check-label" for="inlineRadio3">5
                                <i class="ri-star-fill"></i></label>
                        </div>

                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary submitbtn" onClick={handleSubmit}>
                                Submit Feedback
                            </button>
                        </div>

                    </div>
                </form>
            </div>


        </div>
    );
}

export default Feedback;
