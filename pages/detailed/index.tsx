import React, { useState } from "react";
import Head from "next/head";
import { Row, Col, Affix, Icon, Breadcrumb } from "antd";
import cx from "classnames";

import Header from "../../components/Header";
import Author from "../../components/Author";
import Advert from "../../components/TagList";
import Footer from "../../components/Footer";
import Approval from "../../components/Approval";
import Comment from "../../components/Comment";
import CommentList from "../../components/CommentList";

import MarkNav from "markdown-navbar";
import "markdown-navbar/dist/navbar.css";

import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

let markdown =
  "## 互联网\n\n网络把主机连接起来，而互联网是把多种不同的网络连接起来，因此互联网把网络串联起来。\n\n## 通信方式\n\n- 客户-服务器（C/S）：客户是服务的请求方，服务器是服务的提供方。\n\n- 对等（P2P）：不区分客户和服务器。\n\n## 时延（delay）\n\n时延是指一个报文或分组从一个网络的一端传送到另一个端所需要的时间。它包括了发送时延，传播时延，处理时延，排队时延。\n\n总时延 = 排队时延 + 处理时延 + 传输时延 + 传播时延\n\n## 5层网络模型介绍\n\n> 互联网的实现分为好几层，每层都有自己的功能，向城市里的高楼一样，每层都需要依赖下一层，对于用户接触到的，只是上面最高一层，当然，如果要了解互联网，就必须从最下层开始自下而上理解每一层的功能。\n\n#### 1. 应用层\n\n构建于TCP协议之上，为应用软件提供服务，应用层也是最高的一层直接面向用户。\n\n- www万维网\n- FTP文件传输协议\n- DNS协议: 域名与IP的转换\n- 邮件传输\n- DCHP协议\n\n#### 2. 传输层\n\n传输层向用户提供可靠的端到端(End-to-End)服务，主要有两个协议分别是TCP、 UDP协议， 大多数情况下我们使用的是TCP协议，它是一个更可靠的数据传输协议。\n\n- 协议对比TCP\n  - 面向链接: 需要对方主机在线，并建立链接。\n  - 面向字节流: 你给我一堆字节流的数据，我给你发送出去，但是每次发送多少是我说了算，每次选出一段字节发送的时候，都会带上一个序号，这个序号就是发送的这段字节中编号最小的字节的编号。\n  - 可靠: 保证数据有序的到达对方主机，每发送一个数据就会期待收到对方的回复，如果在指定时间内收到了对方的回复，就确认为数据到达，如果超过一定时间没收到对方回复，就认为对方没收到，在重新发送一遍。\n- 协议对比UDP\n  - 面向无链接: 发送的时候不关心对方主机在线，可以离线发送。\n  - 面向报文: 一次发送一段数据。\n  - 不可靠: 只负责发送出去，至于接收方有没有收到就不管了。\n\n#### 3. 网络层 \n\n为主机提供数据传输服务。而传输层协议是为主机中的进程提供数据传输服务。网络层把传输层传递下来的报文段或者用户数据报封装成分组。\n\n#### 4. 数据链路层\n\n网络层针对的还是主机之间的数据传输服务，而主机之间可以有很多链路，链路层协议就是为同一链路的主机提供数据传输服务。数据链路层把网络层传下来的分组封装成帧。\n\n#### 5. 物理层\n\n考虑的是怎样在传输媒体上传输数据比特流，而不是指具体的传输媒体。物理层的作用是尽可能屏蔽传输媒体和通信手段的差异，使数据链路层感觉不到这些差异。\n\n根据信息在传输线上的传送方向，分为以下三种通信方式：\n\n- 单工通信：单向传输\n- 半双工通信：双向交替传输\n- 全双工通信：双向同时传输\n\n## OSI\n\n其中表示层和会话层用途如下：\n\n- **表示层** ：数据压缩、加密以及数据描述，这使得应用程序不必关心在各台主机中数据内部格式不同的问题。\n- **会话层** ：建立及管理会话。\n\n五层协议没有表示层和会话层，而是将这些功能留给应用程序开发者处理。\n\n";

const Detailed = () => {
  const renderer = new marked.Renderer();

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function(code) {
      return hljs.highlightAuto(code).value;
    }
  });

  let html = marked(markdown);
  return (
    <>
      <style jsx>{`
        .detailed-title {
          font-size: 1.8rem;
          text-align: center;
          padding: 1rem;
        }

        .center {
          text-align: center;
        }

        .list-icon {
          padding: 0.5rem 0;
          color: #ccc;
        }
        .list-icon span {
          display: inline-block;
          padding: 0 10px;
        }
        .detailed-content {
          padding: 1.3rem;
          font-size: 1rem;
        }

        .active {
          color: rgb(30, 144, 255) !important;
        }

        .nav-title {
          text-align: center;
          color: #888;
          border-bottom: 1px solid rgb(30, 144, 255);
          padding: 10px 0;
          font-size: 16px;
        }

        .article-menu {
          font-size: 12px !important;
        }

        .detailed-content img {
          width: 100%;
          border: 1px solid #f3f3f3;
        }

        .title-level3 {
          display: none !important;
        }

        :global(.ant-anchor-link-title) {
          font-size: 12px !important;
        }
        :global(.ant-anchor-wrapper) {
          padding: 5px !important;
        }
      `}</style>
      <Head>
        <title>博客详细页</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col xs={24} sm={24} md={24} lg={18} xl={12}>
          <div className="comm-left">
            <div className={"detailed-title"}>
              React实战视频教程-技术胖Blog开发(更新08集)
            </div>

            <div className={cx("list-icon", "center")}>
              <span>
                <Icon type="calendar" /> 2019-06-28
              </span>
              <span>
                <Icon type="folder" /> js
              </span>
              <span>
                <Icon type="fire" /> 5498
              </span>
              <span>
                <Icon type="like" /> 0
              </span>

              <span>
                <Icon type="message" /> 0
              </span>
            </div>

            <div
              className="detailed-content"
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
            <Approval />
          </div>

          <Comment />
          <CommentList />
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={0} lg={6} xl={5}>
          <Author />
          <Advert />
          <Affix offsetTop={71}>
            <div className={cx("detailed-nav", "comm-box")}>
              <div className="nav-title">文章目录</div>
              <MarkNav
                className="article-menu"
                source={markdown}
                
              />
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </>
  );
};
export default Detailed;
