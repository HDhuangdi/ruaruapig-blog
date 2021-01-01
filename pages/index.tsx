import React from 'react';
import '../static/style/pages/index.less';
import ArticleCard from '../components/ArticleCard';
import MyPagination from '../components/Pagination';

const Content = () => {
  return (
    <main>
      <div className="title">
        <h1>Happiness lies in the autonomy.</h1>
        <small>— Aristotle</small>
      </div>
      <div className="article-list">
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
      </div>
      <MyPagination></MyPagination>
    </main>
  );
};

export default Content;
