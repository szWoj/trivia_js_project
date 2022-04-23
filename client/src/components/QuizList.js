import {useState} from 'react';
import QuizItem from './QuizItem.js'

const QuizList = ({questions}) => {

    const [currentQuestion, setCurrentQuestion] = useState()

    return (
        <>
            <p>quiz list container goes here.</p>
            <QuizItem />
        </>
    )
}


export default QuizList;

