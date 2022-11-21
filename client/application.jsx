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

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Login/>}/>
                <Route path={"/frontpage"} element={<FrontPage/>}/>
                <Route path={"/menu"} element={<ListMenu listMenu={listMenu}/>}/>
                <Route
                    path={"/menu/vegan"}
                    element={<ListVeganMenu listMenu={listMenuOnlyVegan}/>}
                />
                <Route
                    path={"/menu/vegetarian"}
                    element={<ListVegetarianMenu listMenu={listMenuOnlyVegetarian}/>}
                />
                <Route path={"/addNewMeal"} element={<addNewMeal/>}/>
            </Routes>
        </BrowserRouter>
    );
}