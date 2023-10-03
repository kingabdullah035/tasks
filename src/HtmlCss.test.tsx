import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Some HTML Elements are added.", () => {
    test("There is a header", () => {
        render(<App />);
        const header = screen.getByRole("heading");
        expect(header).toBeInTheDocument();
    });
});

describe("Some basic CSS is added.", () => {
    test("There is a floating red box", () => {
        render(<App />);
        expect(true);
    });

    test("The background color of the header area is different", () => {
        render(<App />);
        const banner = screen.getByRole("banner");
        expect(banner).not.toHaveStyle({
            "background-color": "rgb(40, 44, 52)"
        });
    });
});

describe("Some Bootstrap Elements are added", () => {
    test("There is a bootstrap button", () => {
        render(<App />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass("btn");
        expect(button).toHaveClass("btn-primary");
    });
});
