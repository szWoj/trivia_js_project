import {useState, useEffect} from 'react';
import QuizItem from './QuizItem.js';
import Answers from './Answers.js';


const QuizList = ({questions}) => {

    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const [answers, setAnswers] = useState([]);
    const [choices, setChoices] = useState([]);
    const [finished, setFinished] = useState(false);

    const updateCurrentQuestion = () => {
        setCurrentQuestion(questions[0]);
    }

    const updateChoices = () => {
        const options = [...currentQuestion.incorrect_answers];
        const randomIndex = Math.floor(Math.random() * 4);
        options.splice(randomIndex, 0, currentQuestion.correct_answer);
        setChoices(options);
        // addDefaultAnswer();
    }

    // const addDefaultAnswer = () => {
    //     const copyAnswers = [...answers];
    //     copyAnswers.push(choices[0])
    // }

    useEffect(() => {
        updateCurrentQuestion();
        setFinished(false);
    }, [questions]);

    useEffect(() => {
        updateChoices();
    }, [currentQuestion]);

    const takeAnswer = (answer) => {
        const copyAnswers = [...answers];
        if(copyAnswers.length > questions.indexOf(currentQuestion)){
            copyAnswers.splice(copyAnswers.length - 1, 1, answer);
        } else copyAnswers.push(answer);
        setAnswers(copyAnswers);
    }

    const nextQuestion = () => {
        const index = questions.indexOf(currentQuestion);
        if(index < 9){
            setCurrentQuestion(questions[index+1]);
        }
        else submitQuiz();
    }

    const currentAnswer = answers[answers.length - 1];

    const submitQuiz = () => {
        setFinished(true);
    }

    return (
        <>
            { finished ? 
            <Answers /> :
            <QuizItem currentQuestion={currentQuestion} takeAnswer={takeAnswer} nextQuestion={nextQuestion} choices={choices} currentAnswer={currentAnswer} answers={answers}/>}
        </>
    )
}


export default QuizList;

