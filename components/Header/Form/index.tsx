import { Row, Col, Button, Form, Input, Divider, message } from "antd";
import Router from "next/router";
import { useState } from "react";
import { register, login } from "../../../api";
import { FormComponentProps } from "antd/es/form";

interface UserFormProps extends FormComponentProps {
  onCancel: () => void;
}

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

const LoginForm = (props: any) => {
  const { getFieldDecorator } = props.form;
  const { onCancel } = props;
  const handleLoginSubmit = e => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const res = await login(values);
        const { code ,msg} = res;
        if (code) {
          message.error(msg);
        } else {
          const { userInfo, token } = res;
          message.success(msg);
          window.localStorage.setItem(
            "userInfo",
            JSON.stringify(userInfo || "")
          );
          window.localStorage.setItem("token", JSON.stringify(token || ""));
          onCancel();
        }
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
        {getFieldDecorator("email", {
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
        })(<Input.Password  placeholder="请输入密码" />)}
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

const RegisterForm = (props: any) => {
  const { getFieldDecorator } = props.form;
  const { onCancel } = props;

  const handleRegisterSubmit = e => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const { code, msg } = await register(values);
        if (!code) {
          message.error("邮箱已经注册");
        } else {
          onCancel();
          message.success("注册成功");
        }
      }
    });
  };
  const [confirmDirty, setConfirmDirty] = useState(false);
  const handleConfirmBlur = e => {
    const { value } = e.target;
    setConfirmDirty(confirmDirty || !!value);
  };

  const compareToFirstPassword = (rule, value, callback) => {
    const { form } = props;
    if (value && value !== form.getFieldValue("password")) {
      callback("两次密码输入不相同！");
    } else {
      callback();
    }
  };

  const validateToNextPassword = (rule, value, callback) => {
    const { form } = props;
    if (value && confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  return (
    <Form
      onSubmit={handleRegisterSubmit}
      className="login-form"
      {...formItemLayout}
    >
      <Form.Item label="邮箱">
        {getFieldDecorator("email", {
          rules: [
            { required: true, message: "请输入您的邮箱！" },
            {
              type: "email",
              message: "请输入正确的邮箱地址"
            }
          ]
        })(<Input placeholder="请输入您的邮箱，交个朋友" />)}
      </Form.Item>
      <Form.Item label="昵称">
        {getFieldDecorator("username", {
          rules: [{ required: true, message: "请输入您的昵称！" }]
        })(<Input placeholder="请输入您的昵称" />)}
      </Form.Item>
      <Form.Item label="密码" hasFeedback>
        {getFieldDecorator("password", {
          rules: [
            { required: true, message: "请输入您的密码！" },
            { max: 12, message: "密码不能超过12位" },
            { min: 6, message: "密码少于超过6位" },
            {
              validator: validateToNextPassword
            }
          ]
        })(<Input.Password type="password" placeholder="请输入您的密码" />)}
      </Form.Item>
      <Form.Item label="确认密码" hasFeedback>
        {getFieldDecorator("confirm", {
          rules: [
            {
              required: true,
              message: "请确认您的密码！"
            },
            {
              validator: compareToFirstPassword
            }
          ]
        })(
          <Input.Password
            onBlur={handleConfirmBlur}
            placeholder="请确认您的密码"
          />
        )}
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
  RegisterForm: Form.create<UserFormProps>({ name: "register" })(RegisterForm),
  LoginForm: Form.create<UserFormProps>({ name: "login" })(LoginForm)
};
