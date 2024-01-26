import { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('')
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleCLick = () =>{
    setList([...list, inputValue])
    setInputValue(list);
  }
  const handleRemove = (id) =>{
    const removeItem = list.filter((item) => item.id !== id);
    setList(removeItem);
  }
  return (
    <div className="App">
      <h1>Todo Appliaction</h1>
      <Form.Control
        type="text"
        placeholder="Enter the List"
        onChange={handleInput}
        value={inputValue}
      />
      <Button onClick={handleCLick} variant="primary">
        Click
      </Button>

      <ul>
        {list.map((item) => (
          <li key={item}>{item} <button onClick={()=> handleRemove(item.id)}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
}

export default App;
