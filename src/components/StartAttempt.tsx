import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function quizStatus(inProgress: boolean): void {
        setInProgress(inProgress);
        numberofAttempts(-1);
    }
    function numberofAttempts(num: number): void {
        setAttempts(attempts + num);
    }
    return (
        <div>
            <Button
                onClick={() => quizStatus(true)}
                disabled={inProgress || !attempts}
            >
                Start Quiz
            </Button>

            <Button onClick={() => setInProgress(false)} disabled={!inProgress}>
                Stop Quiz{" "}
            </Button>

            <Button onClick={() => numberofAttempts(1)} disabled={inProgress}>
                Mulligan{" "}
            </Button>

            {<div>Attempts {attempts}</div>}
        </div>
    );
}
