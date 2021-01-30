import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import Link from 'next/link';
import '../static/style/layout/right-sider.less';
import { timeFormater1 } from '../utils/timeUtils';
const { TabPane } = Tabs;

const RightSider = () => {
  let [runningDays, setRunningDays] = useState('');
  //博客开始运行的时间
  const START_TIME = 1609305607787;

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

  useEffect(blogTiming, []);

  return (
    <div className="right-sider">
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
                  <Link href="/">宝塔(BT)面板安装 AList 阿里云盘列表程序</Link>
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
                  <Link href="/">宝塔(BT)面板安装 AList 阿里云盘列表程序</Link>
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
            <span>{runningDays}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSider;
