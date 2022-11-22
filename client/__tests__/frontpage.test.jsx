import { createRoot } from "react-dom/client";
import { act } from "@testing-library/react";
import React from "react";
import { FrontPage } from "../frontpage.jsx";
import { BrowserRouter } from "react-router-dom";

describe("Application component", () => {
  it("Check Application Snapshot", async () => {
    const element = document.createElement("div");
    await act(async () => {
      createRoot(element).render(
        <BrowserRouter>
          <FrontPage />
        </BrowserRouter>
      );
    });
    expect(element.innerHTML).toMatchSnapshot();
  });
});
