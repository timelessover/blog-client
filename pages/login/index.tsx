import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {Spin,Alert} from 'antd';
import { getGithubUser, } from "../../api";

//根据 QueryString 参数名称获取值
function getQueryStringByName(name: string) {
  let result = window.location.search.match(
    new RegExp("[?&]" + name + "=([^&]+)", "i")
  );
  if (result == null || result.length < 1) {
    return "";
  }
  return result[1];
}

const Login = props => {
  const [loading, setLoading] = useState(false);

  const fetchGithubUser = async (code: string) => {
    const res = await getGithubUser({ code });
    window.localStorage.setItem("userInfo", JSON.stringify(res.userInfo || ""));
    window.localStorage.setItem("token", JSON.stringify(res.token || ""));
    window.location.href = JSON.parse(window.localStorage.getItem("LOGINHREF"));
  };

  useEffect(() => {
    const code = getQueryStringByName("code");
    if (code) {
      setLoading(true);
      fetchGithubUser(code);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Spin tip="授权中..." size="large">
        <Header />
        <div style={{ height: 80 + "vh" }}></div>
        <Footer />
      </Spin>
    </>
  );
};

export default Login;
