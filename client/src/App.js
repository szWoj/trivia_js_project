import {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import PlaySong from './components/PlaySong';
import QuizList from './components/QuizList';
import Scores from './components/Scores';
import { getScores, postScores } from './ScoresServices';

// SETTING UP STATE FOR THE  QUESTIONS, SCORES, DISPLAYSCORES AND PLAYERNAME (string)
// SETDISPLAY USESTATE IS FALSE BECAUSE IT RESETS THE SCORES AFTER EACH GAME
// [] FOR SCORES BECAUSE WE KEEP ADDING THEM DURING THE GAME

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

  // FILTER THROUGH THE SCORES TO RETURN THEM BASED ON USER NAME AND IF OBJECT NAME === NAME
  const filterScores = (scores, name) => {
    return scores.filter(obj => obj.name === name);
  }

  // FILTER THROUGH THE SCORES AFTER THE GAME TO RETURN THEM BASED ON USER NAME 

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

// FUNCTION TO FETCH AND THEN RENDER API AND THE SETQUESTION
  const getQuestions = (category, difficulty) => {
    fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
    .then(res => res.json())
    .then(res => setQuestions(res.results))
  }
  
// FUNCTION TO USE ADDSCORE TO NEWSCORE VIA THE SPREAD OPERATOR. POSTSCORES TAKES IN NEWSCORES
// THEN PUSHES TO NEWSCORE AND SETSCORES TO NEWSCORES

  const addScore = (newScore) => {
    const newScores = [...scores]
    postScores(newScore)
    .then(res => {
      newScores.push(res)
      setScores(newScores)
    })
  }

  // TOGGLE TO SET DISPLAY SCORES WHEN HIT BUTTON SHOW SCORES
  const toggleScoresDisplay = () => {
    setDisplayScores(!displayScores);
  }

  // FUNCTION TO GET AND SET PLAYERNAME AND TAKES IN NEW NAME. PLAYERNAME PASSED DOWN TO FORM COMPONENT
  // TO getQuestions AND PLAYERNAME AND THEN LOAD SCORES 

  const getPlayerName = (newName) => {
    setPlayerName(newName)
  }

  // DIV FOR BACKGROUND IMAGE AND TEXT - FORM ON THAT IMAGE
  // RETURN FORM COMPONENT, TOGGLE BUTTON WITH CONDITIONAL FOR DISPLAY SCORES, QUIZLIST AND SCORES WITH PLAYERNAME
  
  return (
      <>
      <img className="hero-image" src={require("./images/yellowbrickroad2.jpeg")} alt='Wizard of Oz'/>
      <div className='hero-text'>
        <h1>The Quizard of Oz</h1>
        <div className='flex-container'>
          <div><Form getQuestions={getQuestions} getPlayerName={getPlayerName} loadPlayerScores={loadPlayerScores}/></div>
          <div className="scores-button"><button onClick={toggleScoresDisplay}>{ displayScores ? "Hide Scores" : "Show Scores" }</button></div>
          <div>{ displayScores ? <Scores scores={scores} /> : ""}</div>
          <div><QuizList questions={questions} addScore={addScore} playerName={playerName}/></div>
        <PlaySong/>
        </div>
      </div>
      <footer>2022 - Created by Annika, Daniel and Szymon - Smart as fuck</footer>
    </>
  );
}

export default App;
