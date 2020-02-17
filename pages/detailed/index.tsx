
import React, { useState } from 'react'
import Head from 'next/head'
import { Row, Col, Affix, Icon, Breadcrumb } from 'antd'
import styles from './style.scss'
import cx from 'classnames'

import Header from '../../components/Header'
import Author from '../../components/Author'
import Advert from '../../components/TagList'
import Footer from '../../components/Footer'
import Approval from "../../components/Approval";
import Comment from "../../components/Comment";
import CommentList from "../../components/CommentList";

import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';

import marked from 'marked'
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";


 


let markdown = 
    '## P01:课程介绍和环境搭建\n' +
    '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
    
    '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
    '**这是加粗的文字**\n\n' +
    '*这是倾斜的文字*`\n\n' +
    '***这是斜体加粗的文字***\n\n' +
    '~~这是加删除线的文字~~ \n\n' +
    '\`console.log(111)\` \n\n' +
    '## p02:来个Hello World 初始Vue3.0\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n' +
    '***\n\n\n' +
    '## p03:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '## p04:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '## p05:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '## p06:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '## p07:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '```\n'+
    'var a=11;\n'+
    '```'



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
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
    });

    let html = marked(markdown)
    return (
      <>
        <Head>
          <title>博客详细页</title>
        </Head>
        <Header />
        <Row className="comm-main" type="flex" justify="center">
          <Col xs={24} sm={24} md={24} lg={18} xl={12}>
            <div className="comm-left">
              <div className={styles["detailed-title"]}>
                React实战视频教程-技术胖Blog开发(更新08集)
              </div>

              <div className={cx(styles["list-icon"], styles["center"])}>
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
                className={styles["detailed-content"]}
                dangerouslySetInnerHTML={{ __html: html }}
              ></div>
              <Approval />
            </div>

            <Comment />
            <CommentList/>
          </Col>

          <Col className="comm-right" xs={0} sm={0} md={0} lg={6} xl={5}>
            <Author />
            <Advert />
            <Affix offsetTop={71}>
              <div className={cx(styles["detailed-nav"], "comm-box")}>
                <div className={styles["nav-title"]}>文章目录</div>
                <MarkNav
                  className={styles["article-menu"]}
                  source={markdown}
                  ordered={false}
                />
              </div>
            </Affix>
          </Col>
        </Row>
        <Footer />
      </>
    );
    
} 
export default Detailed