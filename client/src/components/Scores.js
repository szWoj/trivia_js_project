import {getScores} from '../QuizService.js'

const Scores = () => {

    const scores = getScores();
    scoresDisplay = scores.map(score => {
        return <p>score[category] : score[result]</p>
    })

    return (
        <>
            {scoresDisplay}
        </>
    )
}

export default Scores;