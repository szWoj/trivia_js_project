import './App.css';
import Form from './components/Form';
import QuizList from './components/QuizList';
import Scores from './components/Scores';

function App() {
  return (
    <>
      <h1>The Quizard of Oz</h1>
      <Form />
      <Scores />
      <QuizList />
    </>
  );
}

export default App;
