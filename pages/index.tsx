import React from 'react';
import '../static/style/pages/index.less';
import ArticleCard from '../components/ArticleCard';
import { Pagination } from 'antd';

const Content = () => {
  return (
    <main>
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
    </main>
  );
};

export default Content;
