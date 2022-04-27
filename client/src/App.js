import {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import QuizList from './components/QuizList';
import Scores from './components/Scores';
import { getScores, postScores } from './ScoresServices';
import PlaySound from './components/PlaySound';




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

  const [playerName, setPlayerName] = useState("");

  // const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  // const [answers, setAnswers] = useState([]);

  const filterScores = (scores, name) => {
    return scores.filter(obj => obj.name === name);
  }

  const loadPlayerScores = (name) => {
    getScores()
    .then((res)=>{
        setScores(filterScores(res, name))
    })
  }

  // const loadPlayerScores = () => {
  //       getScores()
  //       .then((res)=>{
  //       setScores(res)
  //       })
  // }


  const getQuestions = (category, difficulty) => {
    fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
    .then(res => res.json())
    .then(res => setQuestions(res.results.length === 0 ? [{question: 'Sorry, there are currently no questions for this topic / difficulty level. Please try again.', correct_answer: '', incorrect_answers: []}] : res.results))
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
          <PlaySound />
          <div><Form getQuestions={getQuestions} getPlayerName={getPlayerName} loadPlayerScores={loadPlayerScores}/></div>
          <div className="scores-button"><button onClick={toggleScoresDisplay}>{ displayScores ? "Hide Scores" : "Show Scores" }</button></div>
          <div>{ displayScores ? <Scores scores={scores} /> : ""}</div>
          <div><QuizList questions={questions} addScore={addScore} playerName={playerName}/></div>
        </div>
      </div>
      <footer>2022 - Created by Annika, Daniel and Szymon - In Glorious Technicolor</footer>
    </>
  );
}

export default App;


            