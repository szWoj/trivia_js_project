// import './Answer.css'

const Answer = ({question, userAnswer, correctAnswer}) => {

    return (
        <div className="answer">
            <h3>{question}</h3>
            <p>Your answer : {userAnswer === "" ? "No Answer" : userAnswer}</p>
            <p>Correct {userAnswer === correctAnswer ? "" : correctAnswer}</p>
        </div>
    )
}

export default Answer;