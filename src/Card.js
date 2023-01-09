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
          cover={
            <img alt="example" src="https://i.postimg.cc/Hs1brypy/image.png" />
          }
        >
          <Meta title="舰装火力装配一览" description="查看飞船配置武器" />
        </Card>
      </a>
    </div>

    <div className="card">
      <a href="https://ccugame.app">
        <Card
          cover={
            <img alt="example" src="https://i.postimg.cc/sxdKfH6B/CCU.png" />
          }
        >
          <Meta title="CCU计算器" description="折扣计算网站" />
        </Card>
      </a>
    </div>

    <div className="card">
      <a href="https://hangar.link/">
        <Card
          cover={
            <img alt="example" src="https://i.postimg.cc/438xTr35/image.png" />
          }
        >
          <Meta title="舰船仓库" description="持有船只一览" />
        </Card>
      </a>
    </div>

    <div className="card">
      <a href="https://www.sccsgo.com/">
        <Card
          cover={
            <img alt="example" src="https://i.postimg.cc/15ZPb9HS/image.png" />
          }
        >
          <Meta title="交易平台" description="可供各类交易" />
        </Card>
      </a>
    </div>

    <div className="card">
      <a href="https://uexcorp.space/">
        <Card
          cover={
            <img
              alt="example"
              src="https://i.postimg.cc/T16SNPXH/minning.png"
            />
          }
        >
          <Meta title="跑商和挖矿" description="可供参考" />
        </Card>
      </a>
    </div>

    <div className="card">
      <a href="https://www.starship42.com/">
        <Card
          cover={
            <img alt="example" src="https://i.postimg.cc/NFts8YCQ/image.png" />
          }
        >
          <Meta title="舰船模型修改" description="可自定义舰船模组" />
        </Card>
      </a>
    </div>

    <div className="card">
      <a href="http://www.starcitizenzw.com/">
        <Card
          cover={
            <img alt="example" src="https://i.postimg.cc/X7w2DW2T/image.png" />
          }
        >
          <Meta title="汉化组官网" description="文本汉化" />
        </Card>
      </a>
    </div>

    <div className="card">
      <a href="https://biaoju.site/star-refuge/">
        <Card
          cover={
            <img alt="example" src="https://i.postimg.cc/PJKCPPXg/image.png" />
          }
        >
          <Meta title="避难所官网" description="持续跟踪" />
        </Card>
      </a>
    </div>

    <div className="card">
      <a href="https://uexcorp.space/">
        <Card
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

    <div className="card">
      <a href="https://uexcorp.space/">
        <Card
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
