import Answer from "./Answer";
import React, {useState, useEffect} from 'react';
import { getScores } from "../ScoresServices";
const Answers = ({questions, answers, score}) => {

    

    
    
    const answersDisplay = [];

    for(let i = 0; i < questions.length; i++){

        const answer = {};
        answer["question"] = questions[i].question;
        answer["user_answer"] = answers[i];
        answer["correct_answer"] = questions[i].correct_answer;
        answersDisplay.push(answer);

    }

    const answerNodes = answersDisplay.map((answer, index) => {
        return <Answer question={answer.question} userAnswer={answer.user_answer} correctAnswer={answer.correct_answer} key={index}/>
    })

    return (
        <>
            <h3>You scored {score} out of 10</h3>
            {answerNodes}
        </>
    )
}

export default Answers;