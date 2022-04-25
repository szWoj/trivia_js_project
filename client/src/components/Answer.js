// import './Answer.css'

const Answer = ({question, userAnswer, correctAnswer}) => {

    return (
        <div className="answer">
          <p>{question.replaceAll("&quot;", '"').replaceAll("&#039;", "'")}</p>
            <p>Your answer: {userAnswer === "" ? "No Answer" : userAnswer.replaceAll("&quot;", '"').replaceAll("&#039;", "'") }</p>
            <p>Correct answer: {userAnswer === correctAnswer ? "" : correctAnswer.replaceAll("&quot;", '"').replaceAll("&#039;", "'")}</p>
        </div>
    )
}

export default Answer;