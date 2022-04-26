// import './Answer.css'

const Answer = ({question, userAnswer, correctAnswer}) => {

    return (
        <div className="answer">
            <p>{question.replace(/&quot;|&#039;|&Idquo;|&rdquo;|;|&rsquo;/g, "'").replace(/&euml;/g, "ë").replace(/&ntilde/g, "ñ").replace(/&uacute;/g, "ú").replace(/&aacute;|&eacute/g, "á").replace(/&amp'/g, "&")}</p>
            <p>Your answer: {userAnswer === "" ? "No Answer" : userAnswer.replace(/&quot;|&#039;|&Idquo;|&rdquo;|;|&rsquo;/g, "'").replace(/&euml;/g, "ë").replace(/&ntilde/g, "ñ").replace(/&uacute;/g, "ú").replace(/&aacute;|&eacute/g, "á").replace(/&amp'/g, "&") } {userAnswer === correctAnswer ? <span>&#10003;</span> : ""}</p>
            {userAnswer === correctAnswer ? "" : <p>Correct Answer: {correctAnswer.replace(/&quot;|&#039;|&Idquo;|&rdquo;|;|&rsquo;/g, "'").replace(/&euml;/g, "ë").replace(/&ntilde/g, "ñ").replace(/&uacute;/g, "ú").replace(/&aacute;|&eacute/g, "á").replace(/&amp'/g, "&")}</p>}
        </div>
    )
}

export default Answer;