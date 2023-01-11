import React, { useState } from "react";
import { Avatar, Card } from "antd";
import "./Card.css";

const { Meta } = Card;

const App = () => (
  <div className="top">
    <div className="offical-Site">
      <div className="card-grid">
        <div className="card">
          <a href="https://www.sccsgo.com/">
            <Card
              cover={
                <img
                  alt="example"
                  src="https://i.hd-r.cn/ff0f63b40c0ffbdd76b4c5248f18e962.png"
                />
              }
            >
              <Meta title="交易平台" description="可供各类交易" />
            </Card>
          </a>
        </div>

        
      </div>
    </div>
  </div>
);
export default App;
