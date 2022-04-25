// import './Answer.css'

const Answer = ({question, userAnswer, correctAnswer}) => {

    return (
        <div className="answer">
            <p>{question.replaceAll("&quot;", '"').replaceAll("&#039;", "'")}</p>
            <p>Your answer: {userAnswer === "" ? "No Answer" : userAnswer.replaceAll("&quot;", '"').replaceAll("&#039;", "'") } {userAnswer === correctAnswer ? <span>&#10003;</span> : ""}</p>
            {userAnswer === correctAnswer ? "" : <p>Correct Answer: {correctAnswer.replaceAll("&quot;", '"').replaceAll("&#039;", "'")}</p>}
        </div>
    )
}

export default Answer;