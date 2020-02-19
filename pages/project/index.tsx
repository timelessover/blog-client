import React, { useState } from "react";
import Head from "next/head";
import { Row, Col, List, Icon, Card } from "antd";
import Header from "../../components/Header";
import Author from "../../components/Author";
import TagList from "../../components/TagList";
import Footer from "../../components/Footer";
import cx from "classnames";

const { Meta } = Card;

const Home = () => {
  return (
    <>
      <style jsx>{`
        .card-item {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .card-item :global(.ant-card) {
          width: 45%;
          padding: 2%;
          margin: 2%;
        }
        :global(.ant-card-cover) img {
          height: 300px;
        }
      `}</style>
      <Head>
        <title>项目</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col
          className="comm-left card-container"
          xs={24}
          sm={24}
          md={24}
          lg={18}
          xl={12}
        >
          <div className="card-item">
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="QQ音乐项目"
                description="faskljdlasjdasbdjksbakdjhasiofiasf发神经的卡拉是看得见克拉斯"
              />
            </Card>

            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
            <Card
              hoverable
              className="card-item"
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={0} lg={6} xl={5}>
          <Author />
          <TagList />
        </Col>
      </Row>
      <Footer />
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
    </>
  );
};

export default Home;
