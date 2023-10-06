import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Button, Col, Container, Row } from "react-bootstrap";
import messi from "./MessiWC.jpg";

//import barca from "./barca.jpg";
//import psg from "./psg.jpg";
//import Miami from "./interMiami.jpg";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <br />
                By: Abdullah Maruf
            </header>
<<<<<<< HEAD
            <h1 id="first_header"> G.O.A.T. </h1>
            <img src={messi} alt="messi pic"></img>
            <ol>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ol>

            <p> Hello World </p>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p> Abdullah Maruf </p>

            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>

            <Container>
                <Row>
                    <Col>
                        First column.
                        <div className="red_rectangle"></div>
                    </Col>
                    <Col>
                        Second column.
                        <div className="red_rectangle"></div>
                    </Col>
                </Row>
            </Container>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
