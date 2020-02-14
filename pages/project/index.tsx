import React, { useState } from 'react'
import Head from 'next/head'
import { Row, Col, List, Icon, Breadcrumb } from 'antd'
import Header from '../../components/Header'
import Author from '../../components/Author'
import TagList from '../../components/TagList'
import Footer from '../../components/Footer'
import styles from './style.scss'
import cx from 'classnames'



const Home = () => {

    

    return (
      <>
        <Head>
          <title>Home</title>
        </Head>
        <Header />
        <Row className="comm-main" type="flex" justify="center">
          <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
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

          <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
            <Author />
            <TagList />
          </Col>
        </Row>
        <Footer />
      </>
    );

}

export default Home
