import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import '../static/style/layout/content.less';
import MyFooter from './Footer';
import ArticleCard from '../components/ArticleCard';
import { Row, Col, Pagination, Tabs } from 'antd';
const { TabPane } = Tabs;

const Content = () => {
  return (
    <main>
      <Row style={{ width: '100%' }}>
        <Col className="content-left" xs={24} sm={24} md={18} lg={18} xl={18}>
          <div className="title">
            <h1>Aries's Blog Ruaruapig.xyz</h1>
            <small>小黄的主站</small>
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
        <Col className="content-right" xs={0} sm={0} md={6} lg={6} xl={6}>
          <div className="content-right-tabs">
            <Tabs defaultActiveKey="1">
              <TabPane tab={<i className="iconfont icondianzan"></i>} key="1">
                <h5 className="title-btn hot-articles-title">热门文章</h5>
                <ul className="hot-articles-list">
                  <li className="hot-article">
                    <div className="hot-article-left">
                      <Link href="/">
                        <img
                          src="../static/images/index/article-avatar.jpg"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="hot-article-right">
                      <Link href="/">
                        宝塔(BT)面板安装 AList 阿里云盘列表程序
                      </Link>
                      <div className="hot-article-comments">
                        <i className="iconfont iconpinglun2"></i>
                        <span>996</span>
                      </div>
                    </div>
                  </li>
                  <li className="hot-article">
                    <div className="hot-article-left">
                      <Link href="/">
                        <img
                          src="../static/images/index/article-avatar.jpg"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="hot-article-right">
                      <Link href="/">
                        宝塔(BT)面板安装 AList 阿里云盘列表程序
                      </Link>
                      <div className="hot-article-comments">
                        <i className="iconfont iconpinglun2"></i>
                        <span>996</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </TabPane>
              <TabPane tab={<i className="iconfont iconpinglun1"></i>} key="2">
                <h5 className="title-btn">最新评论</h5>
                <ul>
                  <li className="new-comment">
                    <div className="new-comment-left">
                      <Link href="/">
                        <img
                          src="../static/images/index/article-avatar.jpg"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="new-comment-right">
                      <div className="username">John</div>
                      <div className="details">
                        卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽
                      </div>
                    </div>
                  </li>
                  <li className="new-comment">
                    <div className="new-comment-left">
                      <Link href="/">
                        <img
                          src="../static/images/index/article-avatar.jpg"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="new-comment-right">
                      <div className="username">John</div>
                      <div className="details">
                        卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽
                      </div>
                    </div>
                  </li>
                </ul>
              </TabPane>
            </Tabs>
          </div>
          <div className="blog-info">
            <div className="title-btn">博客信息</div>
            <ul>
              <li>
                <div>
                  <i className="iconfont iconwenzhang"></i>
                  <h6>文章数目</h6>
                </div>
                <span>157篇</span>
              </li>
              <li>
                <div>
                  <i className="iconfont iconpinglun"></i>
                  <h6>评论数目</h6>
                </div>
                <span>1123条</span>
              </li>
              <li>
                <div>
                  <i className="iconfont iconrili"></i>
                  <h6>运行天数</h6>
                </div>
                <span>1年123天</span>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <MyFooter></MyFooter>
    </main>
  );
};

export default Content;
