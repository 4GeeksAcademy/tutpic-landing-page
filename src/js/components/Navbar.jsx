import React from "react";

const Navbar = () => {

    return (
        <div >


            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid w-75">
                    <a className="navbar-brand " href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link active " aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled " href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled " href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled " aria-disabled="true">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}
export default Navbar