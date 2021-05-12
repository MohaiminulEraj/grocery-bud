import React from "react";


const Groceries = ({ text, item, groceries, setGroceries }) => {
    const handleDelete = () => {
        setGroceries(groceries.filter((elem) => elem.id !== item.id));
    }
    const handleEdit = () => {
        setGroceries(groceries.map((elem) => {
            if (elem.id === item.id) {
                return {
                    ...elem, isEditable: !elem.isEditable
                }
            }
            return elem;
        }));
    }
    const handleChange = e => {
        let index = groceries.findIndex((elem) => elem.id === item.id);
        console.log(index, e.target.value, e.target.name);
        let oldGroceries = [...groceries];
        oldGroceries[index][e.target.name] = e.target.value;
        setGroceries(oldGroceries);
    }

    const handleSubmit = () => {
        setGroceries(groceries.map((elem) => {
            if (elem.id === item.id) {
                return {
                    ...elem, isEditable: !elem.isEditable
                }
            }
            return elem;
        }));
    }
    return (
        <div className="container">
            {item.isEditable === false ?
                <li className="mb-2">
                    <input type="text" value={text} disabled />
                    {/* {text} */}
                    <button onClick={handleEdit} style={{ marginLeft: "4px", marginRight: "4px" }}><i class="fas fa-edit"></i></button>
                    <button onClick={handleDelete}><i className="fas fa-trash"></i></button>
                </li>
                :
                <li className="mb-2">
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={text} name="text" id="" onChange={handleChange} autoFocus />
                        <button type="submit" className="btn btn-warning">Edit</button>
                    </form>
                </li>
            }
        </div>
    );
}


export default Groceries;