import './App.css';
import './Nav.css';
import React, { useState } from "react";
import Nav from './Navbar.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>星际公民资源导航站</p>
        <div className="Nav">
          <Nav />
        </div>
        <a
          className="App-link"
          href="https://robertsspaceindustries.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          官方网站
        </a>
      </header>
    </div>
  );
}
export default App;