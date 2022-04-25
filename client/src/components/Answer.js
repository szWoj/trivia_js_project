// import './Answer.css'

const Answer = ({question, userAnswer, correctAnswer}) => {

    return (
        <>
            <p>{question.replaceAll("&quot;", '"').replaceAll("&#039;", "'")}</p>
            <p>Your answer: {userAnswer === "" ? "No Answer" : userAnswer.replaceAll("&quot;", '"').replaceAll("&#039;", "'") }</p>
            <p>Correct answer: {userAnswer === correctAnswer ? "" : correctAnswer.replaceAll("&quot;", '"').replaceAll("&#039;", "'")}</p>
            <hr/>
        </>
    )
}

export default Answer;