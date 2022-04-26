// import {getScores} from '../QuizService.js'
// import {useState, useEffect} from 'react';
import './Scores.css'

    const Scores = ({scores}) => {

        let scoresDisplay;

        if(scores.length > 0){
            scoresDisplay = scores.map((score) => {
                return (
                    <>
                        <h3>{score.score} out of 10</h3>
                        <p>Category: {score.category}</p>
                        <p>Difficulty: {score.difficulty}</p>
                    </>
                )
            })
        }
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
            {/* // <div className='fixedHeightScores'>
            // <div className="scores"> */}
                {scoresDisplay}
            </>
        )
}

export default Scores;