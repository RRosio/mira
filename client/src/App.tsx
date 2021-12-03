import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Home from './containers/Home';
import LoginMain from './containers/LoginMain'

const App = () => {
  return (
    <Router>
      <main className="App">
        <Routes>
          <Route path="/coinbase" element={<LoginMain/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
