import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Row, Col, List, Icon } from "antd";
import Header from "../components/Header";
import Author from "../components/Author";
import TagList from "../components/TagList";
import Footer from "../components/Footer";
import cx from "classnames";
import Link from "next/link";
import { getArticleList, getTagList, getGithubUser } from "../api";
import { timestampToTime } from "../utlis/utils";

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

const Home = props => {
  const [list, setList] = useState([]);
  const [listTitle, setListTitle] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  

  const fetchData = async () => {
    const res = await fetch(
      `http://127.0.0.1:9000/api/articlelist${props.url.asPath}`
    );
    const json = await res.json();
    setList(json.data);
    setListTitle(
      json.categroy ? json.categroy.name + " 相关的文章" : "最新文章"
    );
  };




  useEffect(() => {
    fetchData();
  }, [props.url.asPath]);

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
              header={<div>{listTitle} :</div>}
              itemLayout="vertical"
              dataSource={props.url.asPath === "/" ? props.list : list}
              renderItem={(item: any) => (
                <List.Item>
                  <Row type="flex" justify="space-between">
                    <Col xs={24} sm={24} md={18} lg={18} xl={13}>
                      <div className={cx("container-left")}>
                        <Link href={`/detailed?article_id=${item._id}`}>
                          <a>
                            <div className={cx("list-title")}>{item.title}</div>
                          </a>
                        </Link>

                        <div className={cx("context")}>{item.introduce}</div>
                        <div className={cx("list-icon")}>
                          <span>
                            <Icon type="calendar" />{" "}
                            {timestampToTime(item.update_time, false)}
                          </span>
                          <span>
                            <Icon type="fire" /> {item.view_count}
                          </span>
                          <span>
                            <Icon type="like" /> {item.likes_count}
                          </span>
                          <span>
                            <Icon type="message" /> {item.comment_count}
                          </span>
                        </div>
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
          <TagList taglist={props.taglist} />
        </Col>
      </Row>
      <Footer />
    </>
  );
};

Home.getInitialProps = async () => {
  const list = await getArticleList();
  const taglist = await getTagList();
  return { list, taglist };
};

export default Home;
