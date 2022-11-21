import { createRoot } from "react-dom/client";
import { act } from "@testing-library/react";
import React from "react";
import { ListMenu } from "../Menu/listMenu";
import { BrowserRouter } from "react-router-dom";

describe("ListMenu component", () => {
  const menu = [
    {
      Dish: "Pizza",
      Ingredients: "Flour, Water, Oil, Tomato, Cheese, Seasoning",
      Allergies: "Gluten, Lactose",
      Vegan: "No",
      Vegetarian: "Yes",
    },
  ];

  it("Check listMenu Snapshot", async () => {
    const element = document.createElement("div");
    await act(async () => {
      createRoot(element).render(
        <BrowserRouter>
          <ListMenu listMenu={() => menu} />
        </BrowserRouter>
      );
    });
    expect(element.innerHTML).toMatchSnapshot();
  });

  it("shows menu's from input", async () => {
    const element = document.createElement("div");
    await act(async () => {
      createRoot(element).render(
        <BrowserRouter>
          <ListMenu listMenu={() => menu} />
        </BrowserRouter>
      );
    });

    expect(
      Array.from(element.querySelectorAll("li")).map((e) => e.innerHTML)
    ).toEqual([
      "Dish: Pizza",
      "Ingredients: Flour, Water, Oil, Tomato, Cheese, Seasoning",
      "Allergies: Gluten, Lactose",
      "Vegan: No",
      "Vegetarian: Yes",
    ]);
  });

  it("Check if listMenu throws error", async () => {
    const element = document.createElement("div");
    await act(async () => {
      createRoot(element).render(
        <BrowserRouter>
          <ListMenu
            listMenu={() => {
              throw new Error("Something went wrong");
            }}
          />
        </BrowserRouter>
      );
    });
    expect(element.querySelector("#error-text").innerHTML).toEqual(
      "Error: Something went wrong"
    );
  });
});
