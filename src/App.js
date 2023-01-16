import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import StatsPage from './pages/StatsPage/StatsPage';
import React from 'react';


function App() {

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<HomePage/>}
        />
        <Route 
          path="/statspage" 
          element={<StatsPage/>} 
        />
      </Routes>
    </div>
  );
}

  


export default App;
