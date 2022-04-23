import {getScores} from '../QuizService.js'

    const Scores = () => {

        const [scores, setScores] = useState([]);
    
        const baseURL = 'http://localhost:5000/api/scores/'
    
        const fetchScores = () => {
            return fetch(baseURL)
            .then(res => res.json())
            .then(res => console.log(res))
            .then((res) => setScores(res));
        } 
    
        useEffect(() => {
            fetchScores();
        }, [])
        
        
        // getScores();
        // const scoresDisplay = scores.map(score => {
        //     return <p>{score["category"]} : {score["result"]}</p>
        // })
    
        return (
            <>
                {scores}
            </>
        )
}

export default Scores;