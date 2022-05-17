import React from 'react';
import './styles/Login.css';
import './styles/formRegister.css';
import './js/validationForm';
import './App.css';
import Login from './components/loginComponent'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login/>}></Route>
      </Routes>
    </BrowserRouter>


      
  );
}

export default App;
