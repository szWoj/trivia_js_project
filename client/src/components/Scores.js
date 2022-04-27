// import {getScores} from '../QuizService.js'
// import {useState, useEffect} from 'react';
import './Scores.css'

    const Scores = ({scores, playerName}) => {

 
        const scoresDisplay = scores === [] ? <p>No Scores Yet</p> : scores.map((score) => {
                return (
                    <>
                        <h3>{score.score} out of 10</h3>
                        <p>Category: {score.category}</p>
                        <p>Difficulty: {score.difficulty}</p>
                        <hr/>
                    </>
                )
            })
        
        // const [scores, setScores] = useState([]);
    
        // const baseURL = 'http://localhost:5000/api/scores/'
    
        // const fetchScores = () => {
        //     return fetch(baseURL)
        //     .then(res => res.json())
        //     .then(res => console.log(res))
        //     .then((res) => setScores(res));
        // } 
    
        // useEffect(() => {
        //     fetchScores();
        // }, [])
        
        
        // getScores();
        // const scoresDisplay = scores.map(score => {
        //     return <p>{score["category"]} : {score["result"]}</p>
        // })
    
        return (
            <>
            <div className='fixedHeightScores'>
            <div className="scores">
            {playerName === "" ? <h2>Please enter your name and start a quiz to get scores</h2> : <h2>Scores for {playerName}</h2>}
                {scoresDisplay}
            </div>
            </div>
            </>
        )
}

export default Scores;