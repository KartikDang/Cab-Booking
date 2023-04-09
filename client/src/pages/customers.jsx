import React from 'react';
import { Link } from 'react-router-dom';
export const Customers = () => {
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
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contact</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                            <th scope="row">1</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                {/* <button type="button" class="btn btn-success">Change Status</button> */}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

// export default Customers;
