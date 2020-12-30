import React, { useState, useEffect } from 'react';
import '../static/style/layout/content.less';
import MyFooter from './Footer';
import ArticleCard from '../components/ArticleCard';
import { Row, Col, Pagination } from 'antd';

const Content = () => {
  return (
    <div className="main-content">
      <Row style={{ width: '100%' }}>
        <Col className="content-left" xs={24} sm={24} md={18} lg={18} xl={18}>
          <div className="title">
            <h1>Huang's Blog Ruaruapig.xyz</h1>
            <small>前端秃子小黄的主站</small>
          </div>
          <div className="article-list">
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
          </div>
          <Pagination defaultCurrent={1} total={50} />
        </Col>
        <Col className="content-right" xs={0} sm={0} md={6} lg={6} xl={6}></Col>
      </Row>
      <MyFooter></MyFooter>
    </div>
  );
};

export default Content;
