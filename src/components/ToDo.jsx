import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Items from './items';

export default function ToDo() {
    const [todos, setTodos] = useState(null);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((result) => {setTodos(result.data)});
    },[]);

    


  return (
    <div>
      {todos? 
      <Items todos={todos}/> : 
        null
      }
    </div>
  )
}
