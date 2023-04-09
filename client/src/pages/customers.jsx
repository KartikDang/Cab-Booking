import React from 'react';
import { Link } from 'react-router-dom';
const Drivers = () => {
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
        </div>
    );
}

export default Drivers;
