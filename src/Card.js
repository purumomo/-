import React,{useState} from "react";
import { Avatar, Card } from "antd";
import "./Card.css";
import Cardlist from "./cardlist";


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
          <Meta title="官方网站" description="直接浏览游戏最新消息" />
        </Card>
      </a>
    </div>

    <div className="card">
      <a href="http://www.starcitizenzw.com/">
        <Card
          cover={
            <img
              alt="example"
              src="https://i.hd-r.cn/2ad5bb08b5fb751c33e97c00d4d64946.png"
            />
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
            <img
              alt="example"
              src="https://i.hd-r.cn/3ffff504e30f05d7513c902f43015611.png"
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
          <Meta title="商品搜索器" description="WFtank提供星际公民商品搜索器" />
        </Card>
      </a>
    </div>
  </div>
);
export default App;
