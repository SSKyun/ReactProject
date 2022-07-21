import React from 'react';
import Register from './register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calmain from './calender/Calmain';
import Main from './title/Main.js';
import Login from './log/Login';
import Fpage from './firstPage/Fpage';
import Test from './test/Test';
import Search from './firstPage/search/Search';


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Fpage />} />
        <Route path='/main' element={<Main />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/calender' element={<Calmain />} />
        <Route path='/test' element={<Test />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </Router>
    
  );
};

export default App;