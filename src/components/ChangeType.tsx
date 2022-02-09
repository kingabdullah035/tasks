<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";
>>>>>>> upstream/task-forms

export function ChangeType(): JSX.Element {
    const [questionType, setquestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    function setVisibility(): void {
        if (questionType === "short_answer_question") {
            setquestionType("multiple_choice_question");
        } else {
            setquestionType("short_answer_question");
        }
    }
    return (
        <div>
            <Button onClick={setVisibility}>Change Type</Button>
            {questionType === "short_answer_question" && (
                <div> Short Answer </div>
            )}
            {questionType === "multiple_choice_question" && (
                <div> Multiple Choice </div>
            )}
        </div>
    );
}
