import { createRoot } from "react-dom/client";
import { act } from "@testing-library/react";
import React from "react";
import { Application } from "../application.jsx";


describe("Application component", () => {

    it("Check Application Snapshot", async () => {
        const element = document.createElement("div");
        await act(async () => {
            createRoot(element).render(
                    <Application/>
            );
        });
        expect(element.innerHTML).toMatchSnapshot();
    });


});