import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Items from "./items";

export default function ToDo () {
    const [todos, setTodos] = useState();
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((result) => {setTodos(result.data);});
    },[]);

    


  return (
    <div>
      {todos? 
      <Items todos={todos}/> 
      : 
      <div>
        <div className="spinner-grow text-primary position-absolute top-50 start-50" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      }
    </div>
  );
}
