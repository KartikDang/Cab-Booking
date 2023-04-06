// import React from 'react';
import './navbar.css';
import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
// import "../../styles/header.css";

const navLinks = [
    {
        path: "/home",
        display: "Home",
    },
    {
        path: "/about",
        display: "About",
    },
    {
        path: "/cars",
        display: "Cars",
    },

    {
        path: "/blogs",
        display: "Blog",
    },
    {
        path: "/contact",
        display: "Contact",
    },
];
const Navbar=()=>{

    const menuRef = useRef(null);

    const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
    return (
        // <nav class="navbar navbar-expand-lg bg-body-tertiary">
        //     <div class="container-fluid">
        //         <a class="navbar-brand" href="#">Navbar</a>
        //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span class="navbar-toggler-icon"></span>
        //         </button>
        //         <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li class="nav-item">
        //                     <a class="nav-link active" aria-current="page" href="#">Home</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link" href="#">Link</a>
        //                 </li>
        //                 <li class="nav-item dropdown">
        //                     <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                         Dropdown
        //                     </a>
        //                     <ul class="dropdown-menu">
        //                         <li><a class="dropdown-item" href="#">Action</a></li>
        //                         <li><a class="dropdown-item" href="#">Another action</a></li>
        //                         <li><hr class="dropdown-divider"/></li>
        //                         <li><a class="dropdown-item" href="#">Something else here</a></li>
        //                     </ul>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link disabled">Disabled</a>
        //                 </li>
        //             </ul>
        //             <form class="d-flex" role="search">
        //                 <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        //                     <button class="btn btn-outline-success" type="submit">Search</button>
        //             </form>
        //         </div>
        //     </div>
        // </nav>

        // <div>
        //     <nav class="navbar bg-body-tertiary" >
        //         <div class="container-fluid nav1">

        //             <div>Need Help? <i class="ri-phone-line"></i>  Call:- +91919191919</div>
        //             <div className="navbarbtn">

        //                 <button class="btn btn-outline-success login" type="submit"> <i class="ri-login-circle-line"></i> Login</button>

        //                 <button class="btn btn-outline-success register" type="submit"><i class="ri-user-line"></i> Register</button>
        //             </div>
        //         </div>
        //     </nav>


        //     <nav class="navbar2 bg-body-tertiary">
        //         <div class="container-fluid nav2">
        //             {/* <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"> */}
        //             {/* <i class="fa-solid fa-arrow-right-to-arc"></i> */}
        //             <div>

        //                 <h1><i class="ri-taxi-line"></i> UBER</h1>
        //             </div>

        //             <div className='Location'>
        //                 <i class="ri-map-pin-line"></i>
        //                 <div className="location_text">
        //                     <div className='Country'>India</div>
        //                     <div className='City'>Delhi, India</div>
        //                 </div>
        //             </div>

        //             <div className="Time Location">
        //                 <i class="ri-map-pin-line"></i>
        //                 <div className="location_text">
        //                     <div className='Country'>Monday to Sunday</div>
        //                     <div className='City'>8am - 12pm</div>
        //                 </div>
        //             </div>

        //             <div className='btn'>
        //                 <button type="submit" class="btn btn-primary">
        //                     <i class="ri-phone-line"></i>  Request a Call
        //                 </button>
        //             </div>

        //         </div>
        //     </nav>
        // </div>


        <header className="header">
            {/* ============ header top ============ */}
            <div className="header__top">
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="6">
                            <div className="header__top__left">
                                <span>Need Help?</span>
                                <span className="header__top__help">
                                    <i class="ri-phone-fill"></i> +1-202-555-0149
                                </span>
                            </div>
                        </Col>

                        <Col lg="6" md="6" sm="6">
                            <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                                <Link to="#" className=" d-flex align-items-center gap-1">
                                    <i class="ri-login-circle-line"></i> Login
                                </Link>

                                <Link to="#" className=" d-flex align-items-center gap-1">
                                    <i class="ri-user-line"></i> Register
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* =============== header middle =========== */}
            <div className="header__middle">
                <Container>
                    <Row>
                        <Col lg="4" md="3" sm="4">
                            <div className="logo">
                                <h1>
                                    <Link to="/home" className=" d-flex align-items-center gap-2">
                                        <i class="ri-car-line"></i>
                                        <span>
                                            Rent Car <br /> Service
                                        </span>
                                    </Link>
                                </h1>
                            </div>
                        </Col>

                        <Col lg="3" md="3" sm="4">
                            <div className="header__location d-flex align-items-center gap-2">
                                <span>
                                    <i class="ri-earth-line"></i>
                                </span>
                                <div className="header__location-content">
                                    <h4>Bangladesh</h4>
                                    <h6>Sylhet City, Bangladesh</h6>
                                </div>
                            </div>
                        </Col>

                        <Col lg="3" md="3" sm="4">
                            <div className="header__location d-flex align-items-center gap-2">
                                <span>
                                    <i class="ri-time-line"></i>
                                </span>
                                <div className="header__location-content">
                                    <h4>Sunday to Friday</h4>
                                    <h6>10am - 7pm</h6>
                                </div>
                            </div>
                        </Col>

                        <Col
                            lg="2"
                            md="3"
                            sm="0"
                            className=" d-flex align-items-center justify-content-end "
                        >
                            <button className="header__btn btn ">
                                <Link to="/contact">
                                    <i class="ri-phone-line"></i> Request a call
                                </Link>
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* ========== main navigation =========== */}

            <div className="main__navbar">
                <Container>
                    <div className="navigation__wrapper d-flex align-items-center justify-content-between">
                        <span className="mobile__menu">
                            {/* <i class="ri-menu-line" onClick={toggleMenu}></i> */}
                        </span>

                        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                            <div className="menu">
                                {navLinks.map((item, index) => (
                                    <NavLink
                                        to={item.path}
                                        className={(navClass) =>
                                            navClass.isActive ? "nav__active nav__item" : "nav__item"
                                        }
                                        key={index}
                                    >
                                        {item.display}
                                    </NavLink>
                                ))}
                            </div>
                        </div>

                        <div className="nav__right">
                            <div className="search__box">
                                <input type="text" placeholder="Search" />
                                <span>
                                    <i class="ri-search-line"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    );
}

export default Navbar;