import React, { useState, useEffect } from "react";
import Form from "./components/Form"
import List from "./components/List";

function App() {
  const [inputText, setInput] = useState("");
  const [groceries, setGroceries] = useState([]);
  useEffect(() => {
    getLocalStorage();
  }, []);
  useEffect(() => {
    saveLocalStorage();
  })
  const saveLocalStorage = () => {
    window.localStorage.setItem('groceries', JSON.stringify(groceries));
  }
  const removeLocalStorage = () => {
    window.localStorage.removeItem('groceries');
    location.reload();
  }
  const getLocalStorage = () => {
    if (window.localStorage.getItem('groceries') === null) {
      window.localStorage.setItem('groceries', JSON.stringify([]));
    }
    else {
      let groceriesLocal = JSON.parse(localStorage.getItem("groceries"));
      setGroceries(groceriesLocal);
    }
  }
  return (
    <div style={{ textAlign: 'center' }} className="container mt-1">
      <header>
        <h2>Grocery Bud</h2>
      </header>
      <Form inputText={inputText} groceries={groceries} setGroceries={setGroceries} setInput={setInput} />
      <List setGroceries={setGroceries} groceries={groceries} />
      {groceries.length > 0 &&
        <button type="button" className="btn btn-danger" onClick={removeLocalStorage}>Clear All</button>
      }
    </div>
  );
}

export default App;