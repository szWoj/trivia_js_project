import {useState} from 'react';
import './App.css';
import Form from './components/Form';
import QuizList from './components/QuizList';
import Scores from './components/Scores';


function App() {

  const[questions, setQuestions] = useState([{
      question: '',
      correct_answer: '',
      incorrect_answers: []
  }]);

  // const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  // const [answers, setAnswers] = useState([]);
  
  const getQuestions = (category, difficulty) => {
    fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
    .then(res => res.json())
    .then(res => setQuestions(res.results))
  }
  
  return (
      <>
      <img className="hero-image" src={require("./images/yellowbrickroad2.jpeg")} alt='Wizard of Oz'/>
      <div className='hero-text'>
      <h1>The Quizard of Oz</h1>
      <Form getQuestions={getQuestions}/>
      <Scores />
      <QuizList questions={questions}/>
      </div>
      <footer>2022 - Created by Annika, Daniel and Szymon - Smart as fuck</footer>
    </>
  );
}

export default App;
