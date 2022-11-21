import { createRoot } from "react-dom/client";
import { act } from "@testing-library/react";
import React from "react";
import {Login} from "../login";
import {BrowserRouter} from "react-router-dom";


describe("ListMenu component", () => {

    it("Check if login contains login title", () => {
        const element = document.createElement("div");

        act(() => {
            createRoot(element).render(<BrowserRouter><Login/></BrowserRouter>)
        })

        expect(element.querySelector("h1").innerHTML).toEqual("Login")

    })

    it("check if snapshot is matching \"Login\"", () => {
        const element = document.createElement("div");

        act(() => {
            createRoot(element).render(<BrowserRouter><Login/></BrowserRouter>)
        })

        expect(element.innerHTML).toMatchSnapshot();
    })

});
