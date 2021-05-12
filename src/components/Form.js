import React from 'react'

function Form({ setInput, inputText, groceries, setGroceries }) {
    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSumbit = e => {
        e.preventDefault();
        (inputText.length > 0) ?
            setGroceries([...groceries, { text: inputText, id: '_' + Math.random().toString(36).substr(2, 9), isEditable: false }]) : alert('Please Enter a valid input')
        setInput('');
    }


    return (
        <form className="form-group">
            <input type="text" placeholder="e.g. eggs" name="text" value={inputText} onChange={handleChange} />
            <button type="submit" onClick={handleSumbit} className="btn btn-outline-success">Submit</button>
        </form>
    )
}

export default Form
