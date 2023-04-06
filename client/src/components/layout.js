import React from "react";

function Layout(props){
    return (

        <div>
            <div className="header">
                <div className="d-flex justify-content-between">
                    <h1>Uber</h1>

                    <button>User</button>
                </div>
            </div>

            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

export default Layout;