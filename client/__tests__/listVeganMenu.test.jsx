import { createRoot } from "react-dom/client";
import { act } from "@testing-library/react";
import React from "react";
import { listMenu, ListMenu } from "../Menu/listMenu";
import { BrowserRouter } from "react-router-dom";
import {ListVeganMenu} from "../Menu/listVeganMenu";

describe("ListVeganMenu tests", () => {
    const veganMeal = [
        {
            Dish: "Vanilla Pudding",
            Ingredients: "Milk, Sugar, Cornstarch, Salt, Vanilla, Butter",
            Allergies: "Lactose",
            Vegan: "Yes, swap out milk and butter with vegan alternatives",
            Vegetarian: "Yes"
        },
    ];

    it("Check ListVeganMenu Snapshot", async () => {
        const element = document.createElement("div");
        await act(async () => {
            createRoot(element).render(
                <BrowserRouter>
                    <ListVeganMenu listMenu={() => menu} />
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
                    <ListMenu listMenu={() => veganMeal} />
                </BrowserRouter>
            );
        });

        expect(
            Array.from(element.querySelectorAll("li")).map((e) => e.innerHTML)
        ).toEqual([
            "Dish: Vanilla Pudding",
            "Ingredients: Milk, Sugar, Cornstarch, Salt, Vanilla, Butter",
            "Allergies: Lactose",
            "Vegan: Yes, swap out milk and butter with vegan alternatives",
            "Vegetarian: Yes",
        ]);
    });
});
