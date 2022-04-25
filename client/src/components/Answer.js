// import './Answer.css'

const Answer = ({question, userAnswer, correctAnswer}) => {

    return (
        <>
            <p>{question}</p>
            <p>{userAnswer === "" ? "No Answer" : userAnswer}</p>
            <p>{userAnswer === correctAnswer ? "" : correctAnswer}</p>
        </>
    )
}

export default Answer;