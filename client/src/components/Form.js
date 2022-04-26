import {useState} from 'react';
import './Form.css';

const Form = ({getQuestions, getPlayerName}) => {

    const [nameInput, setNameInput] = useState('')
    const [categoryInput, setCategoryInput] = useState('')
    const [difficultyInput, setDifficultyInput] = useState('')
    
    // const [formData, setFormData] = useState([]);

    const handleName = (event) => {
        setNameInput(event.target.value)
    }

    const handleCategory = (event) => {
        setCategoryInput(event.target.value)
    }

    const handleDifficulty = (event) => {
        setDifficultyInput(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        getQuestions(categoryInput, difficultyInput);
        getPlayerName(nameInput);
        setNameInput('');
        setCategoryInput('');
        setDifficultyInput('');
    }
    
    const categories = [
        "General Knowledge",
        "Entertainment: Books",
        "Entertainment: Film",
        "Entertainment: Music",
        "Entertainment: Musicals & Theaters",
        "Entertainment: Television",
        "Entertainment: Video Games",
        "Entertainment: Board Games",
        "Science & Nature",
        "Science: Computers",
        "Science: Mathematics",
        "Mythology",
        "Sports",
        "Geography",
        "History",
        "Politics",
        "Art",
        "Celebrities",
        "Animals",
        "Vehicles",
        "Entertainment: Comics",
        "Science: Gadgets",
        "Entertainment: Japanese Anime & Manga",
        "Entertainment: Cartoon & Animation"
        ]

        const difficulties = [
            "easy",
            "medium", 
            "hard"
        ]

        const categoryNodes = categories.map((category, index) => {
            return <option value={index + 9}>{category}</option>
        })
        const difficultyNodes = difficulties.map(difficulty => {
            return <option value={difficulty}>{difficulty}</option>
        })
    
    return (
        <div className='form'>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor='name-input'>Enter your name</label>
            <input type='text' id='name-input' value={nameInput} onChange={handleName} required></input>

            <p>Choose a category and the difficulty</p>
            <div className="select">

            <select className='mySelect' onChange={handleCategory} value={categoryInput} required>
            <option value="" disabled >Choose a category</option>
            {categoryNodes}
            </select>  
            <select className='mySelect' onChange={handleDifficulty} value={difficultyInput} required>
            <option value="" disabled >Choose difficulty</option>
            {difficultyNodes}
            </select>
            </div>
            <button type='submit'>Start Quiz</button>
        </form>
        </div>
    )
}







export default Form;