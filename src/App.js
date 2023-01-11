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
            <h1>各类官网</h1>
            <Card />
            <h1>CCU计算</h1>
            <Ccu />
            <h1>舰船信息</h1>
            <Si />
            <h1>交易平台</h1>
            <Tp />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
