import "./App.css";
import LogIn from "./components/LogIn";
import ToDo from "./components/ToDo";
import Navbar from "./components/navbar.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { useState } from "react";

function App () {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function loginCheck (){
    setIsLoggedIn(!isLoggedIn);
  }

  

  return (
    <>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} loginCheck={loginCheck}/>
        <Routes>
          <Route path='/todoApp' element={<LogIn loginCheck={loginCheck}/>}/>
          <Route path='/todoApp/todo' element={<ToDo/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
 
export default App;
