<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
import { Button } from "react-bootstrap";
>>>>>>> upstream/task-forms

/**
By Date
 * 🎇 New year 
 * 🌙 Ramdan
 * 🕌 eid al fitr
 * 🐐 eid al adha
 * 🎄 Christmas  
 
By Alpha
 * 🎄 Christmas  
 * 🐐 eid al adha
 * 🕌 eid al fitr
 * 🎇 New year 
 * 🌙 Ramdan
 */
type Holiday =
    | "Christmas"
    | "Eid al adha"
    | "Eid al fitr"
    | "New Year"
    | "Ramdan";

// Maps the Old state -> New State
const HolidayByTime: Record<Holiday, Holiday> = {
    "New Year": "Ramdan",
    Ramdan: "Eid al fitr",
    "Eid al fitr": "Eid al adha",
    "Eid al adha": "Christmas",
    Christmas: "New Year"
};

const HolidayByAlphabet: Record<Holiday, Holiday> = {
    Christmas: "Eid al adha",
    "Eid al adha": "Eid al fitr",
    "Eid al fitr": "New Year",
    "New Year": "Ramdan",
    Ramdan: "Christmas"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Ramdan");
    function changeHolidayAlphabetically(): void {
        const nextHoliday = HolidayByAlphabet[holiday];
        setHoliday(nextHoliday);
    }

    function changeHolidayByTime(): void {
        const nextHoliday = HolidayByTime[holiday];
        setHoliday(nextHoliday);
    }

    let emojiRepresentation: string;
    if (holiday === "Christmas") {
        emojiRepresentation = "🎄";
    } else if (holiday === "Eid al adha") {
        emojiRepresentation = "🐐";
    } else if (holiday === "Eid al fitr") {
        emojiRepresentation = "🕌";
    } else if (holiday === "New Year") {
        emojiRepresentation = "🎇";
    } else {
        emojiRepresentation = "🌙";
    }

    return (
        <div>
            <div>Holiday: {emojiRepresentation}</div>
            <Button onClick={changeHolidayAlphabetically}>
                Advance by Alphabet
            </Button>
            <Button onClick={changeHolidayByTime}>Advance by Year</Button>
        </div>
    );
}
