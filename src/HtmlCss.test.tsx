import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
<<<<<<< HEAD
import userEvent from "@testing-library/user-event";
=======
>>>>>>> 179b356 (First set of tests)

describe("Some HTML Elements are added.", () => {
    test("There is a header", () => {
        render(<App />);
        const header = screen.getByRole("heading");
        expect(header).toBeInTheDocument();
    });
<<<<<<< HEAD

    test("There is an image with alt text", () => {
        render(<App />);
        const image = screen.getByRole("img");
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("alt");
    });

    test("There is a list with at least three elements", () => {
        render(<App />);
        const list = screen.getByRole("list");
        expect(list).toBeInTheDocument();
        expect(list.children.length).toBeGreaterThanOrEqual(3);
    });
});

describe("Some basic CSS is added.", () => {
    test("The background color of the header area is different", () => {
        render(<App />);
        const banner = screen.getByRole("banner");
        expect(banner).not.toHaveStyle({
            "background-color": "rgb(40, 44, 52)"
        });
=======
});

describe("Some basic CSS is added.", () => {
    test("There is a floating red box", () => {
        render(<App />);
        expect(true);
>>>>>>> 179b356 (First set of tests)
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
<<<<<<< HEAD
    test("There is one bootstrap button with the text 'Log Hello World'", () => {
        render(<App />);
        const button = screen.getByRole("button", { name: /Log Hello World/i });
=======
    test("There is a bootstrap button", () => {
        render(<App />);
        const button = screen.getByRole("button");
>>>>>>> 179b356 (First set of tests)
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass("btn");
        expect(button).toHaveClass("btn-primary");
    });
<<<<<<< HEAD

    test("Not clicking the bootstrap button does not logs 'Hello World!'", () => {
        const consoleSpy = jest.spyOn(console, "log");
        render(<App />);
        expect(consoleSpy).not.toHaveBeenCalledWith("Hello World!");
    });

    test("Clicking the bootstrap button logs 'Hello World!'", () => {
        const consoleSpy = jest.spyOn(console, "log");
        render(<App />);
        const button = screen.getByRole("button", { name: /Log Hello World/i });
        userEvent.click(button);
        expect(consoleSpy).toHaveBeenCalledWith("Hello World!");
    });
});

/**
 * Remember, there are additional tasks described on the page!
 */
=======
});
>>>>>>> 179b356 (First set of tests)
