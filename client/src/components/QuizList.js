import {useState} from 'react';
import QuizItem from './QuizItem.js'

const QuizList = ({questions}) => {

    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const [answers, setAnswers] = useState([]);

    const takeAnswer = (answer) => {
        const copyAnswers = [...answers];
        copyAnswers.push(answer);
        setAnswers(copyAnswers);
    }

    const nextQuestion = () => {
        const index = questions.indexOf(currentQuestion);
        if(index < 9){
            setCurrentQuestion(questions[index+1]);
        }
        // else submit quiz, return answers
    }

    return (
        <>
            <QuizItem questions={questions} currentQuestion={currentQuestion} takeAnswer={takeAnswer} nextQuestion={nextQuestion}/>
        </>
    )
}


export default QuizList;

