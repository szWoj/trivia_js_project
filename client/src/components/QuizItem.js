
const QuizItem = ({currentQuestion, takeAnswer, nextQuestion, choices, currentAnswer, answers}) => {

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
            {currentQuestion.question !== '' ? choicesRadio : ""}
            </div>
            {choicesRadio.length > 1 ? <button onClick={handleClick}>{answers.length === 10 ? "Submit Quiz" : "Next Question"}</button> : ""}
        {/* <img className="wizard" src={require("../images/wizard2.jpeg")} alt='Wizard of Oz'/>  */}

        </>

    )
}






export default QuizItem;