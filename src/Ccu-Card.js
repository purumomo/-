import React, { useState } from "react";
import { Avatar, Card } from "antd";
import "./Card.css";
import imageU from "./img/CCU.png";
<img src={imageU} />;


const { Meta } = Card;

const App = () => (
  <div className="top">
    <div className="offical-Site">
      <div className="card-grid">

        <div className="card">
          <a href="https://ccugame.app">
            <Card
              cover={
                <img
                  alt="example"
                  src={imageU}
                />
              }
            >
              <Meta title="CCU计算器" description="用于折扣计算叠叠乐" />
            </Card>
          </a>
        </div>
        
      </div>
    </div>
  </div>
);
export default App;
