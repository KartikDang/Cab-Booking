// FOR UPDATING PROFILE


import React from 'react';
import { NavbarApp } from '../components/navbarApp';
import { LightningLoader } from '../components/loader';
import "./register.css";

export const ProfilePage = () => {
    // const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [Name, setName] = React.useState("");
    const [contact, setContact] = React.useState("");
    const [confirmPass, setConfirmPass] = React.useState("");
    const [isLoaded, setisLoaded] = React.useState(0);
    // console.log(name);
    async function handleLoad() {
        // e.preventDefault();

        await fetch("http://localhost:8080/retrieveCurrentUser", {
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
                setName(data[0].name);
                setisLoaded(true);
                // console.log(name);
            })
            if (res.status === 200) {
            } else {
                alert('Login into an Account');
            }
        })
    }

    function signOut() {
        console.log("sign out");
    }


    // var delayInMilliseconds = 3000; //1 second
    // var a = 1;
    // setTimeout(function () {
    //     //your code to be executed after 1 second
    //     delayInMilliseconds = 0;
    //     a=0;
    // }, delayInMilliseconds);

    if (!isLoaded) {
        handleLoad();
        return (
            <div className="loader" >

                <LightningLoader />

            </div>

        )

    }



    return (
        <div>
            <NavbarApp />
            {/* <img src="..." class="rounded mx-auto d-block" alt="..."></img> */}


            <h2 className="Auth-form-title" style={{ margin: "1%" }}>Profile Page</h2>
            <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" class="rounded mx-auto d-block" alt="..." style={{ width: "15%" }} onLoad={handleLoad}></img>

            <div className="Auth-form-content">
                <h3 className="Auth-form-title">Update User Details</h3>
                <div className="form-group mt-3">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control mt-1"
                        placeholder="Full Name"
                        onChange={(e) => { setName(e.target.value) }}
                        value={Name}
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Contact</label>
                    <input
                        type="text"
                        className="form-control mt-1"
                        placeholder="Contact Number"
                        onChange={(e) => { setContact(e.target.value) }}
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Password"
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary submitbtn" >
                        Update Details
                    </button>
                </div>
                {/* <p className="forgot-password text-right mt-2">
                            Forgot password?
                        </p> */}
            </div>

        </div>
    );

}

// export default ProfilePage;
