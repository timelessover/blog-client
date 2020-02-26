import React, { useState } from "react";
import Head from "next/head";
import { Row, Col, Affix, Icon, Breadcrumb } from "antd";
import cx from "classnames";

import Header from "../../components/Header";
import Author from "../../components/Author";
import TagList from "../../components/TagList";
import Footer from "../../components/Footer";
import Approval from "../../components/Approval";
import Comment from "../../components/Comment";
import CommentList from "../../components/CommentList";

import MarkNav from "markdown-navbar";
import "markdown-navbar/dist/navbar.css";

import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

import { getArticleById, isLikeArticle } from "../../api";
import { timestampToTime } from "../../utlis/utils";

const Detailed = props => {
  const {
    title,
    content,
    update_time,
    view_count,
    likes_count,
    comment_count,
    category
  } = props.data;

  

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

  let html = marked(content);

  const [userLogin, setUserLogin] = useState(false); // 用户登录

  const handleUserLogin = event => {
    setUserLogin(event);
  };

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
      <Header handleUserLogin={handleUserLogin} />
      <Row className="comm-main" type="flex" justify="center">
        <Col xs={24} sm={24} md={24} lg={18} xl={12}>
          <div className="comm-left">
            <div className={"detailed-title"}>{title}</div>

            <div className={cx("list-icon", "center")}>
              <span>
                <Icon type="calendar" /> {timestampToTime(update_time, false)}
              </span>
              <span>
                <Icon type="folder" /> {category[0].name}
              </span>
              <span>
                <Icon type="fire" /> {view_count}
              </span>
              <span>
                <Icon type="like" /> {likes_count}
              </span>

              <span>
                <Icon type="message" /> {comment_count}
              </span>
            </div>

            <div
              className="detailed-content"
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
            <Approval article_id={props.article_id} userLogin={userLogin} />
          </div>

          <Comment article_id={props.article_id} userLogin={userLogin} />
          <CommentList article_id={props.article_id} userLogin={userLogin} />
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={0} lg={6} xl={5}>
          <Affix offsetTop={71}>
            <div className={cx("detailed-nav", "comm-box")}>
              <div className="nav-title">文章目录</div>
              <MarkNav className="article-menu" source={content} />
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

const getArticleList = async () => {
  const res = await fetch("http://127.0.0.1:9000/api/articles");
  const json = await res.json();
  return json;
};

const getTagList = async () => {
  const res = await fetch("http://127.0.0.1:9000/api/categories");
  const json = await res.json();
  return json;
};

Detailed.getInitialProps = async ctx => {
  const data = await getArticleById(ctx.query.article_id);
  return { data, article_id: ctx.query.article_id };
};

export default Detailed;
