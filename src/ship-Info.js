import React, { useState } from "react";
import { Avatar, Card } from "antd";
import "./Card.css";
import imageA from "./img/minning.png";
import imageB from "./img/模型.png";
import imageC from "./img/配船.png";
import imageD from "./img/huoli.png";
import imageE from "./img/机库.png";

const { Meta } = Card;

const App = () => (
  <div className="top">
    <div className="offical-Site">
      <div className="card-grid">
        <div className="card">
          <a href="https://www.erkul.games/live/ships">
            <Card
              cover={
                <img
                  alt="example"
                  src={imageD}
                />
              }
            >
              <Meta title="舰装火力装配一览" description="查询游戏内武器配置" />
            </Card>
          </a>
        </div>

        <div className="card">
          <a href="https://hangar.link/">
            <Card
              cover={
                <img
                  alt="example"
                  src={imageE}
                />
              }
            >
              <Meta title="舰船仓库" description="同步后可查看自己的舰船整合信息" />
            </Card>
          </a>
        </div>

        <div className="card">
          <a href="https://uexcorp.space/">
            <Card cover={<img alt="example" src={imageA} />}>
              <Meta title="跑商和挖矿" description="查询游戏内任务详情" />
            </Card>
          </a>
        </div>

        <div className="card">
          <a href="https://www.starship42.com/">
            <Card
              cover={
                <img
                  alt="example"
                  src={imageB}
                />
              }
            >
              <Meta title="舰船模型修改" description="可自定义舰船模组" />
            </Card>
          </a>
        </div>

        <div className="card">
          <a href="https://hardpoint.io/#/">
            <Card
              cover={
                <img
                  alt="example"
                  src={imageC}
                />
              }
            >
              <Meta title="配船网站" description="可计算开火回充时的能量消耗" />
            </Card>
          </a>
        </div>
        <div className="card">
          <a href="https://zephyraux.com/xian-translator/">
            <Card
              cover={
                <img
                  alt="example"
                  src="https://i.hd-r.cn/40e9551692cad0eb3b7425058b816fd0.png"
                />
              }
            >
              <Meta title="西安语翻译器" description="翻译外星语言" />
            </Card>
          </a>
        </div>
        <div className="card">
          <a href="https://wftank.cn/search">
            <Card
              cover={
                <img
                  alt="example"
                  src="https://i.hd-r.cn/f2170c75ca1b708e91d5c44cb95f4bf6.png"
                />
              }
            >
              <Meta
                title="商品搜索器"
                description="WFtank提供星际公民商品搜索器"
              />
            </Card>
          </a>
        </div>
      </div>
    </div>
  </div>
);
export default App;
