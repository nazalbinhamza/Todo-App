import './App.css';
import {useState} from "react";


function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState('');

  const deleteHandler = (objId) => {
    let data = toDos.filter((item) => {
      return item.id !== objId;
    });
    setTodos(data);
  };

  const handleButton = () => {
    if (toDo.trim().length > 0) {
      setTodos([...toDos, { id: Date.now(), text: toDo, status: false }]);
      setTodo('');
    }
  };

  const handleCheckboxChange = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Monday 🌝 ☕</h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={handleButton} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo" key={obj.id}>
              <div className="left">
                <input
                  onChange={() => handleCheckboxChange(obj.id)}
                  type="checkbox"
                  checked={obj.status}
                />
                <p
                  style={{
                    textDecoration: obj.status ? 'line-through' : 'none',
                    color: obj.status ? 'gray' : 'black',
                  }}
                >
                  {obj.text}
                </p>
              </div>
              <div className="right">
                <i
                  className="fas fa-times"
                  onClick={() => deleteHandler(obj.id)}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

                                                                                                                                                                         
export default App;
