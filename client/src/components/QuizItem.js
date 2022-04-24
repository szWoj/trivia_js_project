
const QuizItem = ({currentQuestion, takeAnswer, nextQuestion}) => {

    
    const choices = [...currentQuestion.incorrect_answers];
    const randomIndex = Math.floor(Math.random() * 4);
    choices.splice(randomIndex, 0, currentQuestion.correct_answer);
    console.log(choices);
    const choicesRadio = choices.map((choice, index) => {
        return (
            <>
            <input type="radio" name="choices" id={index} value={choice}/>
            <label htmlFor={index}>{choice}</label>
            <br></br>
            </>
        )
    })


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