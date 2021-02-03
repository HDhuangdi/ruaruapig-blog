import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import Link from 'next/link';
import '../static/style/layout/right-sider.less';
import { timeFormater1 } from '../utils/timeUtils';
import {
  getTopThumbsArticles,
  getTopViewsArticles,
  getVisitorCounts,
  getArticleCounts,
} from '../http/article';
const { TabPane } = Tabs;

const RightSider = () => {
  let [runningDays, setRunningDays] = useState('');
  let [topThumbsArticles, setTopThumbsArticles] = useState([]);
  let [topViewsArticles, setTopViewsArticles] = useState([]);
  let [visitorCounts, setVisitorCounts] = useState(0);
  let [articleCounts, setArticleCounts] = useState(0);

  const START_TIME = 1609305607787; //博客开始运行的时间

  /**
   * 博客运行时间正计时
   */
  const blogTiming = () => {
    let option = {
      day: true,
      hour: true,
    };
    setRunningDays(timeFormater1(START_TIME, new Date().getTime(), option));
    setInterval(() => {
      setRunningDays(timeFormater1(START_TIME, new Date().getTime(), option));
    }, 1000 * 60 * 5);
  };

  /**
   * 获取最多点赞数文章
   */
  const myGetTopThumbsArticles = () => {
    getTopThumbsArticles().then((res: any) => {
      setTopThumbsArticles(res.data);
    });
  };

  /**
   * 获取最多浏览数文章
   */
  const myGetTopViewsArticles = () => {
    getTopViewsArticles().then((res: any) => {
      setTopViewsArticles(res.data);
    });
  };

  /**
   * 获取网站的访客数量
   */
  const myGetVisitorCount = () => {
    getVisitorCounts().then((res: any) => {
      setVisitorCounts(res.data);
    });
  };

  /**
   * 获取文章总数量
   */
  const myGatArticleCounts = () => {
    getArticleCounts().then((res: any) => {
      setArticleCounts(res.data.count);
    });
  };

  useEffect(() => {
    blogTiming();
    myGetTopThumbsArticles();
    myGetTopViewsArticles();
    myGetVisitorCount();
    myGatArticleCounts();
  }, []);

  return (
    <div className="right-sider">
      <div className="content-right-tabs">
        <Tabs defaultActiveKey="1">
          <TabPane tab={<i className="iconfont icondianzan"></i>} key="1">
            <h5 className="title-btn hot-articles-title">喜欢最多</h5>
            <ul className="hot-articles-list">
              {topThumbsArticles.map((article: any) => (
                <li className="hot-article" key={article.id}>
                  <div className="hot-article-left">
                    <Link href={'/details/' + article.id}>
                      <img
                        src="../static/images/layout/right-sider/article-avatar.jpg"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="hot-article-right">
                    <Link href={'/details/' + article.id}>{article.title}</Link>
                    <div className="hot-article-info">
                      <i className="iconfont icondianzan1"></i>
                      <span>{article.thumbs}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </TabPane>
          <TabPane tab={<i className="iconfont iconpinglun1"></i>} key="2">
            <h5 className="title-btn">热度最高</h5>
            <ul>
              {topViewsArticles.map((article: any) => (
                <li className="hot-article" key={article.id}>
                  <div className="hot-article-left">
                    <Link href={'/details/' + article.id}>
                      <img
                        src="../static/images/layout/right-sider/article-avatar.jpg"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="hot-article-right">
                    <Link href={'/details/' + article.id}>{article.title}</Link>
                    <div className="hot-article-info">
                      <i className="iconfont iconredu"></i>
                      <span>{article.views}</span>
                    </div>
                  </div>
                </li>
              ))}
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
            <span>{articleCounts}篇</span>
          </li>
          <li>
            <div>
              <i className="iconfont iconzuji"></i>
              <h6>访客数量</h6>
            </div>
            <span>{visitorCounts}个小可爱</span>
          </li>
          <li>
            <div>
              <i className="iconfont iconrili"></i>
              <h6>运行天数</h6>
            </div>
            <span>{runningDays}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSider;
