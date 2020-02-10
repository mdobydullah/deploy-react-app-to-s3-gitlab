import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="400" />
        <p>
          <span style={{color: "rgb(154, 218, 70)"}}>MyNotePaper.com Presents:</span> <br />
          <span>Build & Deploy React App to AWS S3 Using GitLab CI/CD.</span>
        </p>
      </header>
    </div>
  );
}

export default App;
