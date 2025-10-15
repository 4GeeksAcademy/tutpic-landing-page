import React from "react";

const Jumbotron = () => {

    return (
        <div className="jumbotron bg-body-secondary p-5 w-75">
            <h1 className="display-4">A Warm Welcome!</h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                 </p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">A call to action!</a>
                </p>
        </div>
    )
}
export default Jumbotron