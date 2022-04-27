// import {getScores} from '../QuizService.js'
// import {useState, useEffect} from 'react';
import './Scores.css'

    const Scores = ({scores}) => {

 
        const scoresDisplay = scores === [] ? <p>No Scores Yet</p> : scores.map((score) => {
                return (
                    <>
                        <h3>{score.score} out of 10</h3>
                        <p>Category: {score.category}</p>
                        <p>Difficulty: {score.difficulty}</p>
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
                {scoresDisplay}
            </div>
            </div>
            </>
        )
}

export default Scores;