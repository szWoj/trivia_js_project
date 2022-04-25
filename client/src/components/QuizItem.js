
const QuizItem = ({currentQuestion, takeAnswer, nextQuestion, choices, currentAnswer, answers}) => {

    const handleAnswer = (e) => {
        takeAnswer(e.target.value);
    }

    const choicesRadio = choices.map((choice, index) => {
    return (
        <>
        <input type="radio" name="choices" id={index} value={choice} onChange={handleAnswer} checked={choice === currentAnswer}/>
        <label htmlFor={index}>{choice.replaceAll("&quot;", '"').replaceAll("&#039;", "'")}</label>
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
        <div className='question'>
            <h2>{currentQuestion.question.replaceAll("&quot;", '"').replaceAll("&#039;", "'")}</h2>
            {currentQuestion.question !== '' ? choicesRadio : ""}
            {choicesRadio.length > 1 ? <button onClick={handleClick}>{answers.length === 10 ? "Submit Quiz" : "Next Question"}</button> : ""}
        {/* <img className="wizard" src={require("../images/wizard2.jpeg")} alt='Wizard of Oz'/>  */}
        </div>
    )
}






export default QuizItem;