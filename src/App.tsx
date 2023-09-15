import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import messi from "./MessiWC.jpg";

import barca from "./barca.jpg";
import psg from "./psg.jpg";
import Miami from "./interMiami.jpg";



function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <br />
                By: Abdullah Maruf
            </header>
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

                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>

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
        </div>
    );
}

export default App;
