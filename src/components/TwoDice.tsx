import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [rightDice, setRightDice] = useState<number>(1);
    const [leftDice, setLeftDice] = useState<number>(2);

    function rollRight(): void {
        setRightDice(d6);
    }
    function rollLeft(): void {
        setLeftDice(d6);
    }
    let message: string;

    if (rightDice === 1 && leftDice === 1) {
        message = "lose";
    } else if (rightDice === leftDice) {
        message = "Win";
    } else {
        message = "Try Again Buddy";
    }
    return (
        <div>
            <span data-testid="left-die">{leftDice}</span>
            <Button onClick={() => rollLeft()}>Roll Left</Button>
            <span data-testid="right-die">{rightDice}</span>
            <Button onClick={() => rollRight()}>Roll Right</Button>
            {<div>{message}</div>}
        </div>
    );
}
