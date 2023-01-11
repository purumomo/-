import React, { useState } from "react";
import { Avatar, Card } from "antd";
import "./Card.css";

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
                  src="https://i.hd-r.cn/d2373d95f6ce5f9411d9440ea47ecb4b.png"
                />
              }
            >
              <Meta title="舰装火力装配一览" description="查看飞船配置武器" />
            </Card>
          </a>
        </div>

        <div className="card">
          <a href="https://hangar.link/">
            <Card
              cover={
                <img
                  alt="example"
                  src="https://i.hd-r.cn/3f56f53c2010e0cd83081fe19d63d2a4.png"
                />
              }
            >
              <Meta title="舰船仓库" description="持有船只一览" />
            </Card>
          </a>
        </div>

        <div className="card">
          <a href="https://uexcorp.space/">
            <Card
              cover={
                <img
                  alt="example"
                  src="https://i.hd-r.cn/9e920e8a20d2159fb6965b06052ca6a9.png"
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
                <img
                  alt="example"
                  src="https://i.hd-r.cn/cff7b1faa1312be4ef6a9f38e5545f3d.png"
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
                  src="https://i.hd-r.cn/7178332df56ef0d93f5fb562aed0ac93.png"
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
