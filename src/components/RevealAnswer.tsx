<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
import { Button } from "react-bootstrap";
>>>>>>> upstream/task-forms
=======
import React, { useState } from "react";
import { Button } from "react-bootstrap";
>>>>>>> c0bbc39 (Updated, complete tests for all state components)

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    function flipVisibility(): void {
        setVisible(!visible);
    }
    return (
        <div>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {visible && <div> 42 </div>}
        </div>
    );
}
