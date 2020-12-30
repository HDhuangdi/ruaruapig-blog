import React, { useState } from 'react';
import Link from 'next/link';
import '../static/style/components/article-card.less';

const ArticleCard = () => {
  let [activeImg, setActiveImg] = useState(false);

  return (
    <div className="article-card">
      <div
        className="article-pic-container"
        onMouseLeave={() => setActiveImg(false)}
        onMouseEnter={() => setActiveImg(true)}
      >
        <div
          className={['article-pic-overlay', activeImg ? 'active' : ''].join(
            ' '
          )}
        >
          不进来康康嘛？
        </div>
        <img
          className={activeImg ? 'active' : ''}
          src="../static/images/components/article-card/main.jpg"
          alt=""
        />
      </div>

      <div className="intro">
        <h2>
          <Link href="/">宝塔(BT)面板安装 AList 阿里云盘列表程序</Link>
        </h2>
        <p>
          前言 经历了 2016
          年的云盘关停潮之后，百度网盘和腾讯微云成为互联网企业中的行业代表，现在阿里也带来了两款云盘产品，分别是阿里云盘和
          Teambition，今天我们要说的是前者，之前很多用过OneDrive列表
          年的云盘关停潮之后，百度网盘和腾讯微云成为互联网企业中的行业代表，现在阿里也带来了两款云盘产品，分别是阿里云盘和
          Teambition，今天我们要说的是前者，之前很多用过OneDrive列表
        </p>
      </div>
      <div className="divider"></div>
      <div className="article-info">
        <div className="item">
          <i className="iconfont icongeren"></i>
          <span>抓住一股仙气</span>
        </div>
        <div className="item">
          <i className="iconfont iconshijian"></i>
          <span>2020年12月30日</span>
        </div>
        <div className="item">
          <i className="iconfont iconliulan"></i>
          <span>408浏览</span>
        </div>
        <div className="item">
          <i className="iconfont iconpinglun2"></i>
          <span>3条评论</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
