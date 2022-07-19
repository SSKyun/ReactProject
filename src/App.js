import React from 'react';
import Register from './register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calmain from './calender/Calmain';
import Main from './title/Main.js';
import Login from './log/Login';
import Fpage from './firstPage/Fpage';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Fpage />} />
        <Route path='/main' element={<Main />} />
        <Route path='/main/register' element={<Register />} />
        <Route path='/main/login' element={<Login />} />
        <Route path='/main/calender' element={<Calmain />} />
      </Routes>
    </Router>
    
  );
};

export default App;