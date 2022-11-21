import { createRoot } from "react-dom/client";
import { act } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import {ListVegetarianMenu} from "../Menu/listVegetarianMenu";

describe("ListVegetarianMenu tests", () => {
    const vegetarianMeal = [
        {
            Dish: "French Toast",
            Ingredients: "Eggs, Bread, Milk, Cinnamon, Syrup",
            Allergies: "Eggs, Gluten, Lactoce",
            Vegan: "No",
            Vegetarian: "Yes"
        },
    ];

    it("Check ListVegetarianMenu Snapshot", async () => {
        const element = document.createElement("div");
        await act(async () => {
            createRoot(element).render(
                <BrowserRouter>
                    <ListVegetarianMenu listMenuOnlyVegetarian={() => vegetarianMeal} />
                </BrowserRouter>
            );
        });
        expect(element.innerHTML).toMatchSnapshot();
    });

    it("shows vegan menu's from input", async () => {
        const element = document.createElement("div");
        await act(async () => {
            createRoot(element).render(
                <BrowserRouter>
                    <ListVegetarianMenu listMenuOnlyVegetarian={() => vegetarianMeal} />
                </BrowserRouter>
            );
        });

        expect(
            Array.from(element.querySelectorAll("li")).map((e) => e.innerHTML)
        ).toEqual([
            "Dish: French Toast",
            "Ingredients: Eggs, Bread, Milk, Cinnamon, Syrup",
            "Allergies: Eggs, Gluten, Lactoce",
            "Vegan: No",
            "Vegetarian: Yes",
        ]);
    });

    it("Check if listVegetarianMenu throws error", async () => {
        const element = document.createElement("div");
        await act(async () => {
            createRoot(element).render(
                <BrowserRouter>
                    <ListVegetarianMenu listMenuOnlyVegetarian={() => {throw new Error("Something went wrong")}} />
                </BrowserRouter>
            );
        });
        expect(element.querySelector("#error-text").innerHTML).toEqual("Error: Something went wrong")
    });
});
