import React, { useState } from "react";
import cx from "classnames";
import Link from "next/link";
import From from "./Form";

const { LoginForm, RegisterForm } = From;

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

import {
  Row,
  Col,
  Menu,
  Icon,
  Button,
  Divider,
  Affix,
  Form,
  Input,
  Modal
} from "antd";

const Header = props => {
  const [visible, setVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(0); // 0：登录，1: 注册
  // const [confirmDirty, setConfirmDirty] = useState(false);

  const login = () => {
    setIsLogin(1);
    setVisible(true);
  };

  const register = () => {
    setIsLogin(0);
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };


 



  



  return (
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
        :global(.login-button-group) {
          text-align: right;
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
              <Button type="primary" onClick={login}>
                登录
              </Button>
              <Divider type="vertical" />
              <Button type="default" onClick={register}>
                注册
              </Button>
            </Col>
          </Row>
        </div>
      </Affix>
      <Modal
        title={isLogin === 0 ? "用户注册" : "用户登录"}
        visible={visible}
        footer={null}
        onCancel={handleCancel}
      >
        {isLogin === 0 ? <RegisterForm /> : <LoginForm />}
      </Modal>
    </>
  );
};

export default Header;
