import {useState, useEffect} from 'react';
import QuizItem from './QuizItem.js';
import Answers from './Answers.js';
import './QuizList.css'


const QuizList = ({questions, addScore}) => {

    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const [answers, setAnswers] = useState([]);
    const [choices, setChoices] = useState([]);
    const [finished, setFinished] = useState(false);
    const [score, setScore] = useState(0);

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
        setAnswers([]);
        setScore(0);
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

    const submitQuiz = () => {
        setFinished(true);
        generateScore();
    }

    const generateScore = () => {
        let newScore = 0;
        for(let i = 0; i < questions.length; i++){
            if(answers[i] === questions[i].correct_answer){
                newScore++;
            }
        }
        setScore(newScore);
        const newResult = {};
        const category = currentQuestion.category;
        const difficulty = currentQuestion.difficulty;
        newResult["category"] = category;
        newResult["difficulty"] = difficulty;
        newResult["score"] = newScore;
        addScore(newResult);
    }

    const currentAnswer = answers[answers.length - 1];

    return (
        <div className='fixedHeight'>
        <div className='content'>
            { finished ? 
            <Answers answers={answers} questions={questions} score={score}/> :
            <QuizItem currentQuestion={currentQuestion} takeAnswer={takeAnswer} nextQuestion={nextQuestion} choices={choices} currentAnswer={currentAnswer} answers={answers} />}
        </div>
        </div>
    )
}


export default QuizList;

