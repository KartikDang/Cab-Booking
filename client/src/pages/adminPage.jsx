import React from 'react';
import { Link } from 'react-router-dom';
import "./adminPage.css";

export const AdminPage = () => {
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


            <div className="d-grid gap-2 mt-3 btn-container" >
                <button type="submit" className="btn btn-primary submitbtn" >
                    <Link to='/customers'>
                        <div className="text">
                            Show All Customers
                        </div>
                    </Link>
                </button>



                <button type="submit" className="btn btn-primary submitbtn" >
                    <Link to='/drivers'>
                        <div className="text">
                            Show All Drivers
                        </div>
                    </Link>
                </button>

            </div>


        </div>
    );
}

// export default AdminPage;
