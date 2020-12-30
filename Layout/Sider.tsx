import React from 'react';
import Link from 'next/link';
import '../static/style/layout/sider.less';

const Sider = () => {
  return (
    <div className="sider">
      <div className="logo-container">
        <img src="../static/images/components/sider/author.png" alt="" />
      </div>
      <div className="divider"></div>
      <div className="author-container">
        <img src="../static/images/components/sider/author.png" alt="" />
        <div className="author">
          <strong>抓住一股仙气</strong>
        </div>
        <div className="autograph">敲码摸鱼...</div>
      </div>
      <div className="divider"></div>
      <div className="nav-bar">
        <span className="title">导航</span>
        <div className="link-container">
          <span className="iconfont iconfaxian-copy"></span>
          <Link href="/">首页</Link>
        </div>
        <div className="link-container">
          <span className="iconfont iconpinglun"></span>
          <Link href="/">留言板</Link>
        </div>
      </div>
      <div className="footer-container">
        <Link href="/">
          <span className="iconfont iconshezhi footer-link"></span>
        </Link>
        <Link href="/aa">
          <span className="iconfont iconWiFi footer-link"></span>
        </Link>
        <Link href="/ss">
          <span className="iconfont iconpinglun1 footer-link"></span>
        </Link>
      </div>
    </div>
  );
};

export default Sider;
