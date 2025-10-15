import React from "react";

const Card = () => {
    return (
        <div className="card text-center mx-2" style={{ width: 16 + "rem" }}>
            <img src="https://placehold.co/600x400" className="card-img-top" alt="card-cap"/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            </div>
            <div className="card-footer bg-body-secondary">
                <button type="button" className="btn btn-primary">Find Out More!</button>
            </div>
        </div>
    )
}
export default Card