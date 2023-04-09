import React from 'react';
import { Link } from 'react-router-dom';
import "./driverDashboard.css"
import { LightningLoader } from '../components/loader';

export const DriverDashboard = () => {

    const [make, setMake] = React.useState('');
    const [type, setType] = React.useState('');
    const [cab_id, setCab_id] = React.useState('');
    const [status, setStatus] = React.useState("Not Available");
    const [isLoaded, setIsLoaded] = React.useState(false);

    async function handleLoad(e) {
        // e.preventDefault();
        // e.preventDefault();

        await fetch("http://localhost:8080/retrieveCurrentDriver", {
            mode: 'cors',
            method: 'GET',
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // body:JSON.stringify({email,password})
        }).then(res => {
            res.json().then(async data => {
                // console.log(data[0]);
                setCab_id(data[0].cab_id);

                await fetch("http://localhost:8080/retrieveCab", {
                    mode: 'cors',
                    method: 'POST',
                    headers: {
                        // 'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ cab_id })
                }).then(res => {
                    res.json().then(data => {
                        console.log(data[0]);
                        setMake(data[0].model);
                        setType(data[0].type);
                        // setStatus(data[0].status);
                    })
                })

                setIsLoaded(true);

            })
        })
    }


    if (!isLoaded) {
        handleLoad();
        return (
            <div className='loader' >
                <LightningLoader />
            </div>
        )
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
                        <Link to="/profileDriver" className='profile-icon'>
                            <i class="ri-user-fill"></i>
                        </Link>
                    </div>

                </div>

            </nav>


            <div className="table-div">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Car</th>
                            <th scope="col">Type</th>
                            <th scope="col">Status</th>
                            <th scope="col">Change Status</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                            <th scope="row">1</th>
                            <td>{make}</td>
                            <td>{type}</td>
                            <td>{status}</td>
                            <td>
                                <button type="button" class="btn btn-success" onClick={handleSubmit}>Make Available</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
