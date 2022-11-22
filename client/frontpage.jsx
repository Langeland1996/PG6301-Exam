import {Link} from "react-router-dom";
import React from "react";

export function FrontPage(){
    return (
        <div>
            <h1>Login</h1>
            <ul>
                <li>
                    <Link to={"/Login"}>Click to login</Link>
                </li>
                <li>
                    <Link to={"/mainPage"}>Go to website</Link>
                </li>
            </ul>
        </div>
    );
}

