
const QuizItem = ({currentQuestion, takeAnswer, nextQuestion, choices}) => {

    const handleAnswer = (e) => {
        takeAnswer(e.target.value);
    }

    const choicesRadio = choices.map((choice, index) => {
        return (
            <>
            <input type="radio" name="choices" id={index} value={choice} onChange={handleAnswer} checked={index === 0}/>
            <label htmlFor={index}>{choice}</label>
            <br></br>
            </>
        )
    })

    const handleClick = (e) => {
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