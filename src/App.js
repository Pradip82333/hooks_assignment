import React, { useState } from "react";
import "./App.css";
import edit from './images/edit.png';
import cancel from './images/delete.png'

// task=> Create a to do list with full
// functionality using react js and hooks.
// please do not use any getelementby ID or any vanilla js functions.

function App() {
  const [items, setItems] = useState("");
  const [arr, setArr] = useState([]);
  const [editTask, setEditTask] = useState(0);

  const changing = (event) => {
    setItems(event.target.value);
  };

  const click = () => {
    console.log(items);
    setArr([...arr, items]);
    setItems("");
  };

  const click1 = (index) => {
    const edit = arr.filter((item, i) => {
      return index === i;
    });
    setItems(edit);
  };

  const click2 = (index) => {
    console.log(index);
    const newArray = arr.filter((item, id) => {
      return index !== id;
    });

    setArr(newArray);
  };

  return (
    <>
      <div className="container">
        <div className="bhati">
          <div className="heading">
            <h1>Todo List</h1>
          </div>
          <div className="bhati-input-div">
            <input
              type="text"
              value={items}
              placeholder="Enter items"
              onChange={changing}
            />
            <button className="btn" onClick={click}>
              <h4>Submit</h4>
            </button>
          </div>
        </div>

        <div className="list">
          <ul>
            {arr.map((value, index) => (
              
                <li className="ul-li" key={index}>
                 <div className="to-do-value">
                 <h3>{value}</h3> </div> 
                  <div className="edit-delete">   
                  <button className="li-btn" onClick={() => click1(index)}>
                  <img src={edit} />
                  </button>
                  <button className="li-btn" onClick={() => click2(index)}>
                  <img src={cancel} />
                  </button>
                  </div>
                </li>
              
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
