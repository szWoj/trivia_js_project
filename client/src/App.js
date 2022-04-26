import {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import QuizList from './components/QuizList';
import Scores from './components/Scores';
import { getScores, postScores } from './ScoresServices';


function App() {

  const[questions, setQuestions] = useState([
      {
        question: '',
        correct_answer: '',
        incorrect_answers: []
    }
  ]);
  
  const [scores, setScores] = useState([]);

  const [displayScores, setDisplayScores] = useState(false);

  const [playerName, setPlayerName] = useState("")

  // const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  // const [answers, setAnswers] = useState([]);
  useEffect(()=>{
    getScores()
    .then((res)=>{
        setScores(res)
    })
}, [])


  const getQuestions = (category, difficulty) => {
    fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
    .then(res => res.json())
    .then(res => setQuestions(res.results))
  }
  
  const addScore = (newScore) => {
    const newScores = [...scores]
    postScores(newScore)
    .then(res => {
      newScores.push(res)
      setScores(newScores)
    })
  }

  const toggleScoresDisplay = () => {
    setDisplayScores(!displayScores);
  }

  const getPlayerName = (newName) => {
    setPlayerName(newName)
  }

  return (
      <>
      <img className="hero-image" src={require("./images/yellowbrickroad2.jpeg")} alt='Wizard of Oz'/>
      <div className='hero-text'>
        <h1>The Quizard of Oz</h1>
        <div className='flex-container'>
          <div><Form getQuestions={getQuestions} getPlayerName={getPlayerName}/></div>
          <div className="scores-button"><button onClick={toggleScoresDisplay}>{ displayScores ? "Hide Scores" : "Show Scores" }</button>
          { displayScores ? <Scores scores={scores} /> : ""}</div>
          <div><QuizList questions={questions} addScore={addScore} playerName={playerName}/></div>
        </div>
      </div>
      <footer>2022 - Created by Annika, Daniel and Szymon - Smart as fuck</footer>
    </>
  );
}

export default App;
