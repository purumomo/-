import React, { useState } from "react";
import { Avatar, Card } from "antd";
import "./Card.css";

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
                  src="https://i.hd-r.cn/01a1e19a7bf950a63b328ceff9294b9a.png"
                />
              }
            >
              <Meta title="CCU计算器" description="折扣计算网站" />
            </Card>
          </a>
        </div>
        
      </div>
    </div>
  </div>
);
export default App;
