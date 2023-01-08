import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";


const { Meta } = Card;

const App = () => (
  <div className="card">
    <Card
      style={{
        width: 300,
      }}
      cover={
        <img
          alt="example"
          src="https://pbs.twimg.com/media/FS89B01WUAUEgOI?format=jpg&name=4096x4096"
        />
      }
    >
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title="官方网站"
        description="直接浏览游戏最新消息"
      />
    </Card>
    <Card
      style={{
        width: 300,
      }}
      cover={
        <img
          alt="example"
          src="https://pbs.twimg.com/media/FS89B01WUAUEgOI?format=jpg&name=4096x4096"
        />
      }
    >
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title="官方网站"
        description="直接浏览游戏最新消息"
      />
    </Card>
    
  </div>
);
export default App;
