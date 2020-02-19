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
    name: "留言板",
    href: "/message"
  },
  {
    key: "about",
    type: "smile",
    name: "关于我",
    href: "about"
  }
];

import { Row, Col, Menu, Icon, Button, Divider, Affix } from "antd";

const Header = () => (
  <>
    <style jsx>{`
      .header {
        background-color: #fff;
        padding-top: 20px;
        margin: 0 auto;
        overflow: hidden;
      }
      .header-logo {
        color: #1890ff;
        font-size: 24px;
        line-height: 50px;
      }
      .btn-list {
        line-height: 50px;
      }
      .display {
        color: red;
      }
    `}</style>
    <style jsx global>{`
      .ant-menu {
        line-height: 50px;
      }
      .ant-menu-horizontal {
        border-bottom: none;
      }
      .ant-menu-item {
        font-size: 16px !important;
        padding: 0 20px;
      }
    `}</style>
    <Affix>
      <div className={cx("header")}>
        <Row type="flex" justify="center">
          <Col xs={24} sm={24} md={8} lg={7} xl={5}>
            <span className={cx("header-logo")}>Chris Liu 的博客空间</span>
          </Col>
          <Col
            className={cx("memu-item")}
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
  </>
);

export default Header;
