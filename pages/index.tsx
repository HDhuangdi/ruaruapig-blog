import React, { useState, useEffect } from 'react';
import servicePath from '../config/apiURL';
import { NextPage, NextPageContext } from 'next';
import Link from 'next/link';
import axios from 'axios';
import Head from 'next/head';
import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import { Row, Col, List, Breadcrumb } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import '../static/style/pages/index.less';
import { IArticle } from '../types/index';

interface IProps {
  asyncData: {
    articleList: IArticle[];
  };
}

const BlogList: NextPage<IProps> = (props: IProps) => {
  const { asyncData } = props;

  const [mylist, setMylist] = useState(asyncData.articleList);
  useEffect(() => {
    setMylist(asyncData.articleList);
  }, [asyncData.articleList]);

  return (
    <div>
      <Head>
        <title>博客</title>
      </Head>
      <Header />
      <Row className="comm-main" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="/">首页</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="/list">列表</a>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={(item) => (
              <List.Item>
                <div className="list-title">
                  <Link href={'/details/' + item.id}>
                    <a href="">{item.title}</a>
                  </Link>
                </div>
                <div className="list-icon">
                  <span>
                    <CalendarOutlined></CalendarOutlined>
                    {item.add_time}
                  </span>
                </div>
                <div className="list-context">{item.introduce}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer></Footer>
    </div>
  );
};

BlogList.getInitialProps = async (ctx: NextPageContext) => {
  let { id } = ctx.query;
  id = id || '1';
  const res = await axios.get(servicePath.getArticleListByTypeId + id);
  return { asyncData: { articleList: res.data } };
};

export default BlogList;
