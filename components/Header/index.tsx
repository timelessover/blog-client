import React, { useState, useEffect } from "react";
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
  Button,
  Divider,
  Affix,
  Form,
  Input,
  Modal,
  Avatar,
  Dropdown,
  Icon,
  message
} from "antd";

const { confirm } = Modal;

const Header = props => {
  const [visible, setVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(0); // 0：登录表单，1: 注册表单
  const [userLogin, setUserLogin] = useState(false); // 用户登录
  const [user, setUser] = useState({ username: "", avatar: "" });

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      setUserLogin(true);
      props.handleUserLogin(true);
      setUser(userInfo);
    }
  }, [visible]);


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

  const showConfirm = (e) => {
    e.preventDefault();
    confirm({
      title: "你真的要退出登录吗？",
      content: "登录状态可对文章进行点赞和评论",
      okText: "确定",
      cancelText: "取消",
      onOk() {
        loginOut();
      },
      onCancel() {
        message.success("取消成功");
      }
    });
  }

  const loginOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem("userInfo");
    setUserLogin(false);
    props.handleUserLogin(false)
    message.success("账号已登出");
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <a onClick={showConfirm}>登出</a>
      </Menu.Item>
    </Menu>
  );

  const UserInfo = () => (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        <Avatar src={user.avatar} size={36} />
        <Divider type="vertical" />
        {user.username}
      </a>
    </Dropdown>
  );
  const LoginBtnList = () => (
    <>
      <Button type="primary" onClick={login}>
        登录
      </Button>
      <Divider type="vertical" />
      <Button type="default" onClick={register}>
        注册
      </Button>
    </>
  );

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
        .ant-dropdown-link {
          padding-bottom: 12px;
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
              {userLogin ? <UserInfo /> : <LoginBtnList />}
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
        {isLogin === 0 ? (
          <RegisterForm onCancel={handleCancel}  />
        ) : (
          <LoginForm onCancel={handleCancel}  />
        )}
      </Modal>
    </>
  );
};

export default Header;
