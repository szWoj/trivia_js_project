import {useState} from 'react';
import './Form.css';

// ASYNC FUNCTION WHICH SETS THE STATE FOR USERNAME/CATEGORY INPUT AND LEVEL OF DIFFICULTY
// TAKES GETQUESTIONS, GET PLAYERNAME, LOADPLAYERSCORE AS PARAMETER

const Form = ({getQuestions, getPlayerName, loadPlayerScores}) => {

    const [nameInput, setNameInput] = useState('')
    const [categoryInput, setCategoryInput] = useState('')
    const [difficultyInput, setDifficultyInput] = useState('')
    
    // const [formData, setFormData] = useState([]);

    // FUNCTIONS TO HANDLE THE STATES BY TARGETING THE EVENT AND IT'S VALUE
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
        loadPlayerScores(nameInput);
        setNameInput('');
        setCategoryInput('');
        setDifficultyInput('');
    }
    
    // HARDCODING AN ARRAY OF CATEGORIES PROVIDED BY THE API - 
    // COULD HAVE BEEN RETRIEVED DIFFERENTLY THOUGH

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

// ASSIGNING FUNCTION TO CONST CATEGORYNODES WHICH WE MAP THROUGH. 
// PASSING IN CATEGORY AND ITS INDEX, RETURNING INDEX =9 BECAUSE CATEGORY STARTS AT INDEX 10

        const categoryNodes = categories.map((category, index) => {
            return <option value={index + 9}>{category}</option>
        })

// ASSIGNING FUNCTION TO CONST DIFFICULTYNODES WHICH WE MAP THROUGH, THEN RETURNS EACH LEVEL
        const difficultyNodes = difficulties.map(difficulty => {
            return <option value={difficulty}>{difficulty}</option>
        })
    
// RETURNING THE FORM AND HANDLE EVENT FUNCTIONS, PASSING IN VARIABLES FOR THE ONCHANGE EVENT.
// PASSING DOWN THE NODES AND INPUT AS VALUES.

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