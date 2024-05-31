import React from 'react';
import './App.css';
import NodeRedEditor from './NodeRedEditor';

function App() {
  return (
    <div className="App">
      <nav className="App-navbar">
      <h3 style={{ color: '#011352' }}>Hi, Sam</h3> 
      <img src={`${process.env.PUBLIC_URL}/images/account.jpg`} alt="Logo 1" />
      <span style={{ color: 'black' }}>Account</span>
      <img src={`${process.env.PUBLIC_URL}/images/db.jpg`} alt="Logo 2" />
      <span style={{ color: 'black' }}>Database</span>
      <img src={`${process.env.PUBLIC_URL}/images/git.png`} alt="Logo 3" />
      <span style={{ color: 'black' }}>Git</span>
      <img src={`${process.env.PUBLIC_URL}/images/storage.png`} alt="Logo 4" />
      <span style={{ color: 'black' }}>Storage</span>
      <img src={`${process.env.PUBLIC_URL}/images/settings.jpg`} alt="Logo 5" />
      <span style={{ color: 'black' }}>Settings</span>
      <img src={`${process.env.PUBLIC_URL}/images/help.png`} alt="Logo 6" />
      <span style={{ color: 'black' }}>Help</span>
      

        {/* Add more logos as needed */}
      </nav>
      <div className="App-content">
        <NodeRedEditor />
      </div>
    </div>
  );
}

export default App;
