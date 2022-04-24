
const QuizItem = ({currentQuestion, takeAnswer, nextQuestion, choices, currentAnswer}) => {

    const handleAnswer = (e) => {
        takeAnswer(e.target.value);
    }

    const choicesRadio = choices.map((choice, index) => {
        return (
            <>
            <input type="radio" name="choices" id={index} value={choice} onChange={handleAnswer} checked={choice === currentAnswer}/>
            <label htmlFor={index}>{choice}</label>
            <br></br>
            </>
        )
    })

    const handleClick = () => {
        if(!choices.includes(currentAnswer)){
            takeAnswer("");
        }
        nextQuestion();
    }

    return (
        <>
            <h2>{currentQuestion.question}</h2>
            <div className="flex-container">
            {choicesRadio}
            </div>
            <button onClick={handleClick}>Next Question</button>
        {/* <img className="wizard" src={require("../images/wizard2.jpeg")} alt='Wizard of Oz'/>  */}

        </>

    )
}






export default QuizItem;