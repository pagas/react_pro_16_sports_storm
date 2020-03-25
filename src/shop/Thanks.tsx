import React from "react";
import {Link} from "react-router-dom";

export const Thanks = () => {
    return <div>
        <div className="col bg-dark text-white">
            <div className="navbar-brand">
                SPORTS STORE
            </div>
        </div>
        <div className="m-2 text-center">
            <h2>Thanks!</h2>
            <p>Thanks for placing your order.</p>
            <Link to="/shop">
                Return to Store
            </Link>
        </div>
    </div>
};