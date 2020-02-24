import { Row, Col, Button, Form, Input, Divider } from "antd";
import Router from "next/router";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 }
  }
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};

const config = {
  client_id: "9bee0b54d80bcd9a78da",
  client_secret: "696fde177a9a3b833d1d5b044409f4fd050ebb2e",
  scope: ["user"]
};


const githubAuthorization = () => {
  let dataStr = new Date().valueOf();
  window.localStorage.setItem(
    "LOGINHREF",
    JSON.stringify(window.location.href || "")
  );
  //重定向到认证接口,并配置参数
  let path = `https://github.com/login/oauth/authorize?client_id=${config.client_id}&scope=${config.scope}&state=${dataStr}`;
  window.location.href = path;
};

const LoginForm = props => {
  const { getFieldDecorator } = props.form;
  const handleLoginSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  return (
    <Form
      onSubmit={handleLoginSubmit}
      className="login-form"
      {...formItemLayout}
    >
      <Form.Item label="邮箱">
        {getFieldDecorator("e-mail", {
          rules: [
            { required: true, message: "请输入邮箱！" },
            {
              type: "email",
              message: "请输入正确的邮箱地址"
            }
          ]
        })(<Input placeholder="请输入邮箱" />)}
      </Form.Item>
      <Form.Item label="密码">
        {getFieldDecorator("password", {
          rules: [{ required: true, message: "请输入密码！" }]
        })(<Input type="password" placeholder="请输入密码" />)}
      </Form.Item>
      <Form.Item {...tailFormItemLayout} className="login-button-group">
        <Button type="primary" htmlType="submit">
          登录
        </Button>
        <Divider type="vertical" />
        <Button type="danger" onClick={githubAuthorization}>
          github登录
        </Button>
      </Form.Item>
    </Form>
  );
};

const RegisterForm = props => {
  const { getFieldDecorator } = props.form;

  const handleRegisterSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  return (
    <Form
      onSubmit={handleRegisterSubmit}
      className="login-form"
      {...formItemLayout}
    >
      <Form.Item label="邮箱">
        {getFieldDecorator("email", {
          rules: [{ required: true, message: "请输入您的邮箱！" }]
        })(<Input placeholder="请输入您的邮箱，交个朋友" />)}
      </Form.Item>
      <Form.Item label="密码">
        {getFieldDecorator("password", {
          rules: [{ required: true, message: "请输入您的密码！" }]
        })(<Input type="password" placeholder="请输入您的密码" />)}
      </Form.Item>
      <Form.Item label="昵称">
        {getFieldDecorator("username", {
          rules: [{ required: true, message: "请输入您的昵称！" }]
        })(<Input placeholder="请输入您的昵称" />)}
      </Form.Item>
      <Form.Item label="个人主页">
        {getFieldDecorator("homepage", {
          rules: [{ required: true, message: "请输入您的个人主页地址！" }]
        })(<Input placeholder="请输入您的个人主页地址" />)}
      </Form.Item>
      <Form.Item {...tailFormItemLayout} className="login-button-group">
        <Button type="primary" htmlType="submit" className="login-form-button">
          注册
        </Button>
        <Divider type="vertical" />
        <Button type="danger" onClick={githubAuthorization}>
          github登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default {
  RegisterForm: Form.create({ name: "register" })(RegisterForm),
  LoginForm: Form.create({ name: "login" })(LoginForm)
};
