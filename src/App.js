import './App.css';
import './Nav.css';
import React, { useState } from "react";
import Nav from './Navbar.js';
import Search from './Search.js';
import Card  from './Card.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>星际公民资源导航站</p>
      </header>
      <div className="C">
        <div className="Nav">
          <Nav />
        </div>
        <div className="right">
          <div className="Search">
            <Search />;
          </div>
          <div className="Content">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
