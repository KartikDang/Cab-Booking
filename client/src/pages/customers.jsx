import React from 'react';
import { Link } from 'react-router-dom';
import { LightningLoader } from '../components/loader';
export const Customers = () => {

    const [isLoaded, setIsLoaded] = React.useState(false);
    const [res, setRes] = React.useState([]);

    async function handleLoad(e) {

        await fetch("http://localhost:8080/allcustomers", {
            mode: 'cors',
            method: 'GET',
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // body:JSON.stringify({email,password})
        }).then(res => {
            res.json().then(data => {
                console.log(data);
                setIsLoaded(true);
                setRes(data);
                // setMake(data[0].model);
                // setType(data[0].type);
                // setStatus(data[0].status);
            })
        })
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


            <div className="table-div">
                <h3 className="Auth-form-title" style={{ marinTop: "3%" }}>Customers</h3>
                <table class="table">
                    <thead>
                        <tr>
                            {/* <th scope="col">#</th> */}
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contact</th>
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
                                    {/* <th scope = "row"> */}
                                    <td>
                                        {e.Name}
                                    </td>
                                    <td>
                                        {e.email}
                                    </td>
                                    <td>
                                        {e.Contact}
                                    </td>

                                </tr>
                            )
                        })}


                    </tbody>
                </table>
            </div>
        </div>
    );
}

// export default Customers;
