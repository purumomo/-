import './App.css';
import './Nav.css';
import React, { useState } from "react";
import Nav from './Navbar.js';
import Search from './Search.js';
import Card  from './Offical-Card.js';
import Noti from './notificationBar.js'
import Ccu from './Ccu-Card.js';
import Si from './ship-Info.js';
import Tp from './trade-plat';

function App() {
  return (
    <div className="App">
      <header className="App-header1">block</header>
      <header className="App-header">
        <p>星际公民资源导航站</p>
        <div className="Noti">
          <Noti />
        </div>
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
            <div id="Anchor1">各类官网</div>
            <Card />
            <div id="Anchor2">CCU计算</div>
            <Ccu />
            <div id="Anchor3">舰船信息</div>
            <Si />
            <div id="Anchor4">交易平台</div>
            <Tp />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
