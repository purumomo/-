import './App.css';
import './Nav.css';
import React, { useState } from "react";
import Nav from './Navbar.js';
import G from './Grid.js';
import Search from './Search.js';
import Card  from './Card.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>星际公民资源导航站</p>
      </header>
      <div className="Search">
        <Search />;
      </div>
      <div className="C">
        <div className="Nav">
          <Nav />
        </div>
        <div className="Content">
          <Card/>
          <a href="https://robertsspaceindustries.com/">官方网站</a>
          <a href="https://www.erkul.games/live/ships">改船网站</a>
          <a href="https://ccugame.app">ccugame</a>
          <a href="https://hangar.link/">看船图的网站</a>
          <a href="https://www.sccsgo.com/">交易平台</a>
          <a href="https://uexcorp.space/">跑商和挖矿</a>
        </div>
      </div>
    </div>
  );
}
export default App;
