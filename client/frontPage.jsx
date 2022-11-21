import {Link} from "react-router-dom";
import React from "react";

export function FrontPage() {
    return (
        <div>
            <h1>Welcome to food catering</h1>
            <h4>Click on the menu and choose between a variety of foods</h4>
            <ul>
                <>
                    <Link to={"/menu"}>Menu</Link>
                    <br></br>
                    <br></br>
                    Admin only: <Link to={"/addNewMeal"}> Add meal to menu</Link>
                    <br></br>
                    <br></br>
                    <Link to={"/"}>Log out</Link>
                </>
            </ul>
        </div>
    );
}