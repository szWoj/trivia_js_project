import {getScores} from '../QuizService.js'

const Scores = () => {

    const scores = getScores().then((scoreList) => {
        scoreList.map(score => {
            return <p>{score["category"]} : {score["result"]}</p>
        })
    })
    

    return (
        <>
            {scores}
        </>
    )
}

export default Scores;