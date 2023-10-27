import React, {useState} from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {

    const [todos, setTodos]= useState([
      {text:"Aprender React", completed:false},
      {text: "Hacer una lista de Tareas", completed:true},
      {text:"Crear una aplicacion de lista de tareas", completed:false}
    ]);

    const [newTodo, setNewTodo]=useState('');

    const addTodo =(text)=> {
      if (text.trim() !== ""){
        const newTodos = [...todos, { text, completed:false}];
        setTodos(newTodos);
        setNewTodo("");
      }
    };

    const removeTodo =(index)=>{
      const newTodos=[...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };

    const toggleComplete=(index)=>{
      const newTodos=[...todos];
      newTodos[index].completed= !newTodos[index].completed;
      setTodos(newTodos);
    };

    return(
      <div className="App">
        <h1>Lista de Tareas</h1>
        <input
        type="text"
        placeholder="Nueva tarea"
        value={newTodo}
        onChange={(e)=>setNewTodo(e.target.value)} />
        <button onClick={()=> addTodo(newTodo)}>Agregar Tarea</button>

        <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
      </div>
    );
  }

export default App;
