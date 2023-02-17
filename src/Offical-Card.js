import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Avatar, Card } from "antd";
import "./Card.css";
import imageA from "./img/汉化.png";
import imageB from "./img/避难所官网.png";

const { Meta } = Card;

const App = () => (
  <div className="top">
    <div className="offical-Site">
      <div className="card-grid">
        <div className="card">
          <a href="https://robertsspaceindustries.com/">
            <Card
              cover={
                <img
                  alt="example"
                  src="https://robertsspaceindustries.com/rsi/static/images/RSI-fb.jpg"
                />
              }
            >
              <Meta title="官方网站" description="直接浏览游戏最新消息" />
            </Card>
          </a>
        </div>

        <div className="card">
          <a href="http://www.starcitizenzw.com/">
            <Card cover={<img alt="example" src={imageA} />}>
              <Meta title="汉化组官网" description="文本汉化" />
            </Card>
          </a>
        </div>

        <div className="card">
          <a href="https://biaoju.site/star-refuge/">
            <Card
              cover={
                <img
                  alt="example"
                  src={imageB}
                />
              }
            >
              <Meta title="避难所官网" description="持续跟踪" />
            </Card>
          </a>
        </div>

        <div className="card">
          <a href="https://starcitizen.tools/Star_Citizen_Wiki">
            <Card
              cover={
                <img
                  alt="example"
                  src="https://i.hd-r.cn/472c816f2d454c8d4ad97cb7d2b4b770.png"
                />
              }
            >
              <Meta title="Wiki百科" description="可查询游戏背景设定" />
            </Card>
          </a>
        </div>
      </div>
    </div>
  </div>
);
export default App;
