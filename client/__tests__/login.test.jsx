import { createRoot } from "react-dom/client";
import { act } from "@testing-library/react";
import React from "react";
import {Login} from "../login";
import {BrowserRouter} from "react-router-dom";
import {FrontPage} from "../frontpage";


describe("Frontpage component", () => {

    it("Check if frontpage contains login title", () => {
        const element = document.createElement("div");

        act(() => {
            createRoot(element).render(<BrowserRouter><FrontPage/></BrowserRouter>)
        })

        expect(element.querySelector("h1").innerHTML).toEqual("Login")

    })

    it("check if snapshot is matching \"Frontpage\"", () => {
        const element = document.createElement("div");

        act(() => {
            createRoot(element).render(<BrowserRouter><FrontPage/></BrowserRouter>)
        })

        expect(element.innerHTML).toMatchSnapshot();
    })

});
