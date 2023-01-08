import React from "react";
import './Card.css';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Avatar, Card } from "antd";


const { Meta } = Card;

const App = () => (
  <div className="card-grid">
    <div className="card">
      <a href="https://robertsspaceindustries.com/">
        <Card
          style={{
            width: 300,
            height: "auto",
          }}
          cover={
            <img
              alt="example"
              src="https://robertsspaceindustries.com/rsi/static/images/RSI-fb.jpg"
            />
          }
        >
          {" "}
          <Meta title="官方网站" description="直接浏览游戏最新消息" />
        </Card>
      </a>
    </div>

    <div className="card">
      <a href="https://www.erkul.games/live/ships">
        <Card
          style={{
            width: 300,
            height: "auto",
          }}
          cover={
            <img
              alt="example"
              src="https://preview.redd.it/nhea88lofsu71.jpg?auto=webp&s=9ad2600e688aeec02017f6e4d15b05fa1a0ffccb"
            />
          }
        >
          <Meta title="舰装火力装配一览" description="查看飞船配置武器" />
        </Card>
      </a>
    </div>

    <div className="card">
      <a href="https://ccugame.app">
        <Card
          style={{
            width: 300,
          }}
          cover={
            <img alt="example" src="https://i.redd.it/qqz9qvawm9l71.jpg" />
          }
        >
          <Meta title="CCU计算器" description="折扣计算网站" />
        </Card>
      </a>
    </div>

    <div className="card">
      <a href="https://hangar.link/">
        <Card
          style={{
            width: 300,
          }}
          cover={
            <img
              alt="example"
              src="https://external-preview.redd.it/q7q1o4XRg8E6hekYhibGKqQML_lyF5_y6Iqz5O56Rl8.jpg?auto=webp&s=0dba366a39c197a665286c91340045a2da0462bf"
            />
          }
        >
          <Meta title="舰船仓库" description="持有船只一览" />
        </Card>
      </a>
    </div>

    <div className="card">
      <a href="https://www.sccsgo.com/">
        <Card
          style={{
            width: 300,
          }}
          cover={
            <img
              alt="example"
              src="https://sccsgo.oss-cn-shanghai.aliyuncs.com/bb8a81c6ee694db1a4a366a268929802.png"
            />
          }
        >
          <Meta title="交易平台" description="可供各类交易" />
        </Card>
      </a>
    </div>

    <div className="card">
      <a href="https://uexcorp.space/">
        <Card
          style={{
            width: 300,
          }}
          cover={
            <img
              alt="example"
              src="https://sccsgo.oss-cn-shanghai.aliyuncs.com/bb8a81c6ee694db1a4a366a268929802.png"
            />
          }
        >
          <Meta title="跑商和挖矿" description="可供参考" />
        </Card>
      </a>
    </div>
  </div>
);
export default App;
