import React from "react";
import cx from "classnames";
import Link from "next/link";

const menuList = [
  {
    key: "home",
    type: "home",
    name: "首页",
    href: "/"
  },
  {
    key: "video",
    type: "youtube",
    name: "项目",
    href: "/project"
  },
  {
    key: "message",
    type: "smile",
    name: "流言板",
    href: "/message"
  },
  {
    key: "about",
    type: "smile",
    name: "关于",
    href: "about"
  }
];

import { Row, Col, Menu, Icon, Button, Divider, Affix } from "antd";

const Header = () => (
  
  <Affix>
    <div className={cx("header")}>
      <style jsx>{`
        $height: 50px;
        $themeColor: #1890ff;

        .header {
          background-color: #fff;
          padding-top: 20px;
          margin: 0 auto;
          overflow: hidden;

          .header-logo {
            color: $themeColor;
            font-size: 24px;
            line-height: $height;
          }

          .btn-list {
            line-height: $height;
          }
        }
      `}</style>
      <style jsx global>{`
        $height: 50px;
        .ant-menu {
          line-height: $height;
        }
        .ant-menu-horizontal {
          border-bottom: none;
        }
        .ant-menu-item {
          font-size: 16px !important;
          padding: 0 20px;
        }
      `}</style>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={8} lg={7} xl={5}>
          <span className={cx("header-logo")}>Chris Liu 的博客空间</span>
        </Col>
        <Col className={cx("memu-item")} xs={0} sm={0} md={10} lg={10} xl={10}>
          <Menu mode="horizontal">
            {menuList.map(item => {
              return (
                <Menu.Item key={item.key}>
                  <Link href={item.href}>
                    <a>
                      <Icon type={item.type} />
                      {item.name}
                    </a>
                  </Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Col>
        <Col className={cx("btn-list")} xs={0} sm={0} md={6} lg={4} xl={4}>
          <Button type="primary">登录</Button>
          <Divider type="vertical" />
          <Button type="default">注册</Button>
        </Col>
      </Row>
    </div>
  </Affix>
);

export default Header;
