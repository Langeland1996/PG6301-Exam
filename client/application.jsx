import {fetchJSON} from "./Middleware/fetchJSON";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FrontPage} from "./frontPage";
import {ListMenu} from "./Menu/listMenu";
import {ListVeganMenu} from "./Menu/listVeganMenu";
import {ListVegetarianMenu} from "./Menu/listVegetarianMenu";
import React from "react";
import {Login} from "./login";

export function Application() {
    async function listMenu() {
        return await fetchJSON("/api/menu");
    }

    async function listMenuOnlyVegan() {
        return await fetchJSON("/api/menu/vegan");
    }

    async function listMenuOnlyVegetarian() {
        return await fetchJSON("/api/menu/vegetarian");
    }

    function createMeal({dish, ingredients, allergies, vegan, vegetarian }){
        if (dish === "" || ingredients === "" || allergies === "" || vegan === "" || vegetarian === "") {
            return <div>Input invalid</div>
        }


        const jsonData = {
            Dish: dish,
            Ingredients: ingredients,
            Allergies: allergies,
            Vegan: vegan,
            Vegetarian: vegetarian
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jsonData)
        };

        fetch("/api/menu" , requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Login/>}/>
                <Route path={"/frontpage"} element={<FrontPage/>}/>
                <Route path={"/menu"} element={<ListMenu listMenu={listMenu}/>}/>
                <Route
                    path={"/menu/vegan"}
                    element={<ListVeganMenu listMenuOnlyVegan={listMenuOnlyVegan}/>}
                />
                <Route
                    path={"/menu/vegetarian"}
                    element={<ListVegetarianMenu listMenuOnlyVegetarian={listMenuOnlyVegetarian}/>}
                />
                <Route path={"/addNewMeal"} element={<addNewMeal/>}/>
            </Routes>
        </BrowserRouter>
    );
}