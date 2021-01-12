import React from 'react';
import '../static/style/pages/index.less';
import ArticleCard from '../components/ArticleCard';
import MyPagination from '../components/Pagination';

const Content = () => {
  return (
    <main>
      <div className="title">
        <h1>In the next war, survivors will only envy the dead.</h1>
        <small>— Khrushchev</small>
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
