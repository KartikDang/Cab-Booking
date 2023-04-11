import React from 'react';
import { Link } from 'react-router-dom';
import { LightningLoader } from '../components/loader';
import LoginUser from './login';
import easyInvoice from 'easyinvoice';
export const PastRidesUser = () => {

    const [user_id, setUser_id] = React.useState('');
    const [res, setRes] = React.useState([]);
    const [isLoaded, setIsLoaded] = React.useState(false);

    async function getPastRides(e) {
        await fetch('http://localhost:8080/retrieveCurrentUser', {
            mode: 'cors',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            res.json().then(async data => {
                console.log(data);
                setUser_id(data[0].user_id);

                await fetch("http://localhost:8080/retrievePastRides", {
                    mode: 'cors',
                    method: 'POST',
                    headers: {
                        // 'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ user_id })
                }).then(res => {
                    res.json().then(async data => {
                        console.log(data);
                        setRes(data);
                        setIsLoaded(true);
                        // setMake(data[0].model);
                        // setType(data[0].type);
                        // setStatus(data[0].status);

                    })
                })
            })
        })
    }


    const handleGenerate = async (booking) => {

        const date = new Date();
        
        
        const data = {
            documentTitle: "INVOICE", //Defaults to INVOICE
            currency: "INR",
            taxNotation: "gst", //or gst
            marginTop: 25,
            marginRight: 25,
            marginLeft: 25,
            marginBottom: 25,
            // logo: "link to show on your invoice",
            sender: {
                company: "DP Cab Service",
                address: "Bits Pilani",
                zip: "333031",
                city: "Pilani",
                country: "India",
            },
            client:{
                company: `${booking.Name}`,
                address: "ABC Street",
                zip: "330031",
                city: "Pilani",
                country: "India",
            },
            invoiceNumber: `${booking.bill_id}`,
            // invoiceDate: ,
            products:[
                {
                    quantity: "1",
                    description: `${booking.pickup_location} to ${booking.destination}`,
                    tax: "18",
                    price: `${booking.estimatedcost}`
                }
            ],
            bottomNotice: "Thank you for choosing DP Cab Service",
        };

        const result = await easyInvoice.createInvoice(data);
        easyInvoice.download(`invoice_${booking.bill_id}.pdf`, result.pdf);
    }

    if (!isLoaded) {
        getPastRides();
        return (
            <div className='loader'>
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

            {/* Table */}

            <div className="table-div">
                <h3 className="Auth-form-title" style={{ marinTop: "3%" }}>Customers</h3>
                <table class="table">
                    <thead>
                        <tr>
                            {/* <th scope="col">#</th> */}
                            <th scope="col">Destination</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Driver Name</th>
                            <th scope="col">Car</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        {/* <tr>
                            <th scope="row">1</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                {/* <button type="button" class="btn btn-success">Change Status</button> */}
                        {/* </td> */}
                        {/* </tr> */}

                        {res.map((e) => {
                            return (
                                <tr>
                                    <td>{e.destination}</td>
                                    <td>{e.estimatedcost}</td>
                                    <td>{e.name}</td>
                                    <td>{e.model}</td>
                                    <td>

                                        <button type="button" class="btn btn-info" onClick={(e)=>{
                                            e.preventDefault();
                                            
                                            handleGenerate({
                                                Name: "Kartik Dang",
                                                bill_id: "12314",
                                                pickup_location: "Pilani",
                                                destination: "Jaipur",
                                                estimatedcost: "1000"
                                            });
                                        }}>Generate Bill</button>
                                        {/* </Link> */}
                                    </td>



                                    {/* <button type="button" class="btn btn-info" onClick={(e)=>{
                                            e.preventDefault();
                                            // <LoginUse />
                                            console.log("Click");
                                            
                                        }}>Send Feedback</button> */}

                                </tr>
                            )
                        })}



                    </tbody>
                </table>
            </div>

        </div>
    );
}

// export default PastRidesUser;
