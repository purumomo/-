import React, { useState } from "react";

import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("舰队管理", "1", <PieChartOutlined />),
  getItem("游戏官网", "2", <DesktopOutlined />),
  getItem("交易平台", "3", <ContainerOutlined />),
  getItem("找物品", "3", <ContainerOutlined />),
  getItem("跑商挖矿", "4", <ContainerOutlined />),
  getItem("交易平台", "5", <ContainerOutlined />),
  getItem("交易平台", "6", <ContainerOutlined />),
  getItem("交易平台", "7", <ContainerOutlined />),
  getItem("交易平台", "8", <ContainerOutlined />),
  getItem("交易平台", "9", <ContainerOutlined />),
  getItem("交易平台", "10", <ContainerOutlined />),
  getItem("交易平台", "11", <ContainerOutlined />),
  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
  ]),
];
const Nav = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      style={{
        width: 256,
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />

    </div>
  );
};

export default Nav;