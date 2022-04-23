import {useState} from 'react';

const Form = ({nameOfTheFunctionWhichSubmittsForm}) => {

    const [nameInput, setNameInput] = useState('')
    const [categoryInput, setCategory] = useState('')
    const [difficultyInput, setDifficulty] = useState('')
    
    // const [formData, setFormData] = useState([]);

    const handleName = (event) => {
        setNameInput(event.target.value)
    }

    const handleCategory = (event) => {
        setCategory(event.target.value)
    }

    const handleDifficulty = (event) => {
        setDifficulty(event.target.value)
    }


    
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const data = {
            amount:5,
            name: nameInput,
            category: categoryInput,
            difficulty: difficultyInput,
            type: multiple
        }
        nameOfTheFunctionWhichSubmittsForm(data);
        setNameInput('');
        setCategory('')
        setDifficulty('')
    }
    return (
        <>
        <p>form goes here.</p>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor='name-input'>Input User's name</label>
            <input type='text' id='name-input' value={nameInput} onChange={handleName} required></input>
            
            <option value="" disabled>Choose a category</option>
            
            <button type='submit'>Save</button>
        </form>
        </>
    )
}







export default Form;