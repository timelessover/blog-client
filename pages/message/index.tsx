import React, { useState } from "react";
import Head from "next/head";
import { Row, Col, List, Icon, Form, Input,Button } from "antd";
import Header from "../../components/Header";
import Author from "../../components/Author";
import TagList from "../../components/TagList";
import Footer from "../../components/Footer";
import cx from "classnames";

const {TextArea} = Input

const Home = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  const { getFieldDecorator } = props.form;
  return (
    <>
      <style jsx>{`
        .list-title {
          font-size: 1.3rem;
          color: #1e90ff;
          padding: 0 0.5rem;
        }

        .list-context {
          color: #777;
          padding: 0.5rem;
        }

        .list-icon {
          padding: 0.5rem 0;
          color: #aaa;
        }
        .list-icon span {
          display: inline-block;
          padding: 0 10px;
        }
      `}</style>
      <style jsx global>{`
        .flex-box {
        }
        .login-form {
          width: 80%;
          margin: 50px auto;
        }
        .comm-left {
          min-height: 80vh;
        }
      `}</style>
      <Head>
        <title>留言板</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col
          className="comm-left flex-box"
          xs={24}
          sm={24}
          md={24}
          lg={18}
          xl={12}
        >
          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item label="姓名">
              {getFieldDecorator("username", {
                rules: [{ required: true, message: "请输入您的姓名" }]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  size="large"
                  placeholder="姓名"
                />
              )}
            </Form.Item>
            <Form.Item label="联系方式">
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "请输入手机号或微信号" }]
              })(
                <Input
                  prefix={
                    <Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  size="large"
                  placeholder="手机号或微信号"
                />
              )}
            </Form.Item>
            <Form.Item label="留言内容">
              {getFieldDecorator("content", {
                rules: [{ required: true, message: "请输入流言内容" }]
              })(
                <TextArea
                  placeholder="说点什么"
                  autoSize={{ minRows: 8, maxRows: 10 }}
                ></TextArea>
              )}
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              className="login-form-button"
            >
              提交
            </Button>
          </Form>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={0} lg={6} xl={5}>
          <Author />
          <TagList />
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Form.create({ name: "message" })(Home);
