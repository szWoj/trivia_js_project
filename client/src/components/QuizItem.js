// import {useEffect} from 'react';

const QuizItem = ({questions, currentQuestion, takeAnswer, nextQuestion}) => {

    const render_choices = () => {
        const choices = [...currentQuestion.incorrect_answers];
        choices.push(currentQuestion.correct_answer);
        console.log(choices);
    }

    // useEffect(() => {
    //     render_choices();
    // }, [questions]);


    return (
        <>
        
        {/* <img className="wizard" src={require("../images/wizard2.jpeg")} alt='Wizard of Oz'/>  */}

        </>

    )
}






export default QuizItem;