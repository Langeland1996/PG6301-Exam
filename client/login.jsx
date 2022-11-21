import {Link} from "react-router-dom";
import React from "react";

export function Login() {
    return (
        <div>
            <h1>Login</h1>
            <ul>
                <li>
                    <Link to={"/Frontpage"}>Click to login</Link>
                </li>
            </ul>
        </div>
    );
}