import './App.css';
import Form from './components/Form';
import QuizList from './components/QuizList';
import Scores from './components/Scores';

function App() {

    const getQuestions = ()
  https://opentdb.com/api_config.php




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
