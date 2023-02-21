import React from "react";
import { Button, notification, Space } from "antd";
const close = () => {
  console.log(
    "Notification was closed. Either the close button was clicked or duration time elapsed."
  );
};
const App = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Space>
        <Button type="link" size="small" onClick={() => api.destroy()}>
          Destroy All
        </Button>
        <Button type="primary" size="small" onClick={() => api.destroy(key)}>
          Confirm
        </Button>
      </Space>
    );
    api.open({
      message: "各种相关群链接",
      description: "星际公民 汉化交流2群:1004136763 / 星河避难所:696608010",
      btn,
      key,
      onClose: close,
    });
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        查看各种相关群
      </Button>
    </>
  );
};
export default App;
