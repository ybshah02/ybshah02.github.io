import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './pages/home/Header';
import Profile from './pages/home/Profile';
import Projects from './pages/projects/Projects'
//import Awards from './components/Awards';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        <main>
          {/*<Profile />*/}
          {/*<Experience />*/}
          {/*<Awards />*/}
        </main>
      </div>
    </Router>
  );
}

export default App;
