import React from "react";
import styles from "./style.scss";
import cx from "classnames";

const menuList = [
  {
    key: "home",
    type: "home",
    name: "首页"
  },
  {
    key: "video",
    type: "youtube",
    name: "项目"
  },
  {
    key: "message",
    type: "smile",
    name: "流言板"
  },
  {
    key: "about",
    type: "smile",
    name: "关于"
  }
];

import { Row, Col, Menu, Icon, Button, Divider, Affix } from "antd";
const Header = () => (
  <Affix>
    <div className={cx(styles["header"])}>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={8} lg={7} xl={5}>
          <span className={cx(styles["header-logo"])}>
            Chris_Ping 的博客空间
          </span>
        </Col>
        <Col
          className={cx(styles["memu-item"])}
          xs={0}
          sm={0}
          md={10}
          lg={10}
          xl={10}
        >
          <Menu mode="horizontal">
            {menuList.map(item => {
              return (
                <Menu.Item key={item.key}>
                  <Icon type={item.type} />
                  {item.name}
                </Menu.Item>
              );
            })}
          </Menu>
        </Col>
        <Col
          className={cx(styles["btn-list"])}
          xs={0}
          sm={0}
          md={6}
          lg={4}
          xl={4}
        >
          <Button type="primary">登录</Button>
          <Divider type="vertical" />
          <Button type="default">注册</Button>
        </Col>
      </Row>
    </div>
  </Affix>
);

export default Header;
