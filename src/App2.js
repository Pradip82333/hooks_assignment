import "./App.css";
import React, { useState } from "react";

// task=> Create a to do list with full
// functionality using react js and hooks.
// please do not use any getelementby ID or any vanilla js functions.

function App2() {
  const [listItems, setlistItems] = useState([]);
  const [inputText, setinputText] = useState({ text: "", id: "" });

  function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36);
  }

  const handleOnChange = (e) => {
    const ID = inputText?inputText.id:''

    
    setinputText({ text: e.target.value, id: ID });
    
  };

  const addListItemHandle = () => {
    if (inputText.id) {
      const tempItem = listItems.map((el) => {
        if (el.id === inputText.id) {
          el.text = inputText.text;
        }
        return el;
      });
      setlistItems(tempItem);
      setinputText({ text: "", id: "" });
    } else {
      const ID = generateUniqueId();
      setlistItems([...listItems, { text: inputText.text, id: ID }]);
      setinputText({ text: "", id: "" });
    }
  };

  const editTaskHandle = (itemToEdit) => {
    setinputText({ text: itemToEdit.text, id: itemToEdit.id });
  };
  const deleteTaskHandle = (itemID) => {
    const newListItems = listItems.filter((element) => {
      return element.id !== itemID;
    });
    setlistItems(newListItems);
  };

  return (
    <div className="App">
      <input type="text" onChange={handleOnChange} value={inputText.text} />
      <button onClick={addListItemHandle}>ADD</button>
      <div className="uk">
        <ul>
          {listItems.map((item) => (
            <li key={item.id}>
              {item.text}
              <button onClick={() => editTaskHandle(item)}>Edit</button>
              <button onClick={() => deleteTaskHandle(item.id)}>
                Delete
              </button>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App2;
