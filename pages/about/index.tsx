import React, { useState } from 'react'
import Head from 'next/head'
import { Row, Col, List, Icon, Breadcrumb } from 'antd'
import Header from '../../components/Header'
import Author from '../../components/Author'
import TagList from '../../components/TagList'
import Footer from '../../components/Footer'
import cx from 'classnames'



const Home = () => {

    

    return (
      <>
        <Head>
          <title>关于我</title>
        </Head>
        <Header />
        <Row className="comm-main" type="flex" justify="center">
          <Col className="comm-left" xs={24} sm={24} md={24} lg={18} xl={12}>
            <div>
              {/* <List
                            itemLayout="vertical"
                            dataSource={mylist}
                            renderItem={item => (
                                <List.Item>
                                    项目列表
                                </List.Item>
                            )}
                        /> */}
              项目列表
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
          .list-icon  span {
            display: inline-block;
            padding: 0 10px;
          }
        `}</style>
      </>
    );

}

export default Home
