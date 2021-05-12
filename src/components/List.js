import React from 'react';
import Groceries from './Groceries';

const List = ({ setInput, inputText, groceries, setGroceries }) => {
    return (
        <div>
            <ul className="row list-unstyled">
                {groceries.map(item => (
                    <Groceries setInput={setInput} inputText={inputText} setGroceries={setGroceries} groceries={groceries} key={item.id} item={item} text={item.text} />
                ))}
            </ul>
        </div>
    )
}

export default List;
