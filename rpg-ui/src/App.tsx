import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import NavHeader from './components/nav-header/nav-header';

function App() {
  return (
    <div className="App">
        <div className='allButCreditFooter'>
          <>
            <NavHeader/>
            <Routes>
              <Route path='/' element={<Home/>} />
            </Routes>
          </>
        </div>
        <p className='credit'>Icone D20 da logo criado por Freepik - Flaticon</p>
    </div>
  );
}

export default App;
