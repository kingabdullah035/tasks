import React from "react";
import "./App.css";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Button, Col, Container, Row } from "react-bootstrap";
import messi from "./MessiWC.jpg";
import barca from "./barca.jpg";
import psg from "./psg.jpg";
import Miami from "./interMiami.jpg";
=======
=======
>>>>>>> upstream/task-forms
=======
>>>>>>> solved-components
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
<<<<<<< HEAD
>>>>>>> ab9bfb5 (Basic starter files for components)
=======
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
<<<<<<< HEAD
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";
>>>>>>> upstream/task-forms
=======
>>>>>>> solved-components

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <br />
                By: Abdullah Maruf
            </header>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <h1 id="first_header"> G.O.A.T. </h1>
            <img src={messi} alt="messi pic"></img>
            <ol>
                <li>
                    <img src={barca} alt="barca pic"></img>
                </li>
                <li>
                    <img src={psg} alt="psg pic"></img>
                </li>
                <li>
                    <img src={Miami} alt="inter miami pic"></img>
                </li>
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
=======
            <hr></hr>
            <CheckAnswer expectedAnswer="42"></CheckAnswer>
            <hr></hr>
            <GiveAttempts></GiveAttempts>
            <hr></hr>
            <EditMode></EditMode>
            <hr></hr>
            <ChangeColor></ChangeColor>
            <hr></hr>
            <MultipleChoiceQuestion
                options={["a", "b", "c"]}
                expectedAnswer="b"
            ></MultipleChoiceQuestion>
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
=======
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
>>>>>>> solved-components
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
<<<<<<< HEAD
>>>>>>> upstream/task-forms
=======
>>>>>>> solved-components
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> ab9bfb5 (Basic starter files for components)
=======
>>>>>>> upstream/task-forms
=======
>>>>>>> solved-components
        </div>
    );
}

export default App;
