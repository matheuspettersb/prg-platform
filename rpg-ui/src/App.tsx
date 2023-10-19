import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import NavHeader from './components/nav-header/nav-header';

function App() {
  return (
    <div className="App">
      <>
        <NavHeader/>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </>
    </div>
  );
}

export default App;
