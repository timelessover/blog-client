import React, { useState } from "react";
import Head from "next/head";
import { Row, Col, List, Icon } from "antd";
import Header from "../components/Header";
import Author from "../components/Author";
import TagList from "../components/TagList";
import Footer from "../components/Footer";
import cx from "classnames";
import Link from "next/link";


const Home = () => {
  const [mylist, setMylist] = useState([
    {
      title: "50元加入小密圈 胖哥带你学一年",
      context:
        "也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队。"
    },
    {
      title: "React实战视频教程-技术胖Blog开发(更新04集)",
      context:
        "也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队。"
    },
    {
      title: "React服务端渲染框架Next.js入门(共12集)",
      context:
        "也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队。"
    },
    {
      title: "React Hooks 免费视频教程(共11集)",
      context:
        "也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队。"
    }
  ]);
  return (
    <>
      <style jsx>{`
        .list-title {
          font-size: 24px;
          color: #1890ff;
          padding: 0 5px;
        }

        .list-icon {
          padding: 0.5rem 0;
          color: #aaa;
        }
        .list-icon span {
          display: inline-block;
          padding: 0 10px;
        }

        .context {
          color: #777;
          padding: 5px;
        }

        .container-right {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .container-right img {
          width: 150px;
          height: 100px;
        }
      `}</style>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={24} lg={18} xl={12}>
          <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={(item: any) => (
              <List.Item>
                <Row type="flex" justify="space-between">
                  <Col xs={24} sm={24} md={18} lg={18} xl={13}>
                    <div className={cx("container-left")}>
                      <Link href="/detailed">
                        <a>
                          <div className={cx("list-title")}>{item.title}</div>
                        </a>
                      </Link>
                      <div className={cx("list-icon")}>
                        <span>
                          <Icon type="calendar" /> 2019-06-28
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
                      <div className={cx("context")}>{item.context}</div>
                    </div>
                  </Col>
                  <Col xs={0} sm={0} md={6} lg={6} xl={6}>
                    <div className={cx("container-right")}>
                      <img
                        src={
                          item.cover ||
                          "https://upload-images.jianshu.io/upload_images/12890819-3a7d6ee6564f9407.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
                        }
                        alt=""
                      />
                    </div>
                  </Col>
                </Row>
              </List.Item>
            )}
          />
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

export default Home;
