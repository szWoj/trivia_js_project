import {useState} from 'react';
import './App.css';
import Form from './components/Form';
import QuizList from './components/QuizList';
import Scores from './components/Scores';

function App() {

  const[questions, setQuestions] = useState([0]);
  const[selectedQuestion, setSelectedQuestion] = useState([null]);
  const[difficulty, setDifficulty] =useState([0]);
  const[selectedDifficulty, setSelectedDifficulty] = useState([null]);
  
  const getQuestions = () =>{
    fetch('https://opentdb.com/api_config.php')
    .then(res => res.json())
    .then(questions = setQuestions(questions))
    .then(difficulty = setDifficulty(difficulty))

  }

  const onQuestionClick = function(question){
    setSelectedQuestion(question);

    const onDifficultyClick = function(difficulty){
      setSelectedDifficulty(difficulty);
    }
  }



  return (
      <>
      <img className="hero-image" src={require("./images/yellowbrickroad2.jpeg")} alt='Wizard of Oz'/>
      <div className='hero-text'>
      <h1>The Quizard of Oz</h1>
      <Form />
      <Scores />
      <QuizList />
      </div>
      <footer>2022 - Created by Annika, Daniel and Szymon - Smart as fuck</footer>
    </>
  );
}

export default App;
