import React, { useState } from 'react';
import '../static/style/pages/index.less';
import ArticleCard from '../components/ArticleCard';
import MyPagination from '../components/Pagination';
import { getArticleList } from '../http/article';

const IndexPage = (props: any) => {
  let [pageInfo, setPageInfo] = useState(props.asyncData.pageInfo);

  //分页条改变处理函数
  const pageChangeHandler = (pageNum: number, pageSize: number) => {
    getArticleList({ pageNum, pageSize }).then((res: any) => {
      setPageInfo(res.data);
    });
  };

  return (
    <main>
      <div className="title">
        <h1>In the next war, survivors will only envy the dead.</h1>
        <small>— Khrushchev</small>
      </div>
      <div className="article-list">
        {pageInfo
          ? pageInfo.list.map((article: any) => (
              <ArticleCard article={article} key={article.id}></ArticleCard>
            ))
          : ''}
      </div>
      <MyPagination
        pageInfo={pageInfo}
        pageChangeHandler={pageChangeHandler}
      ></MyPagination>
    </main>
  );
};

//初始化页面数据 - SSR
IndexPage.getInitialProps = async () => {
  let res: any;
  res = await getArticleList({ pageNum: 1, pageSize: 10 });

  return {
    asyncData: {
      pageInfo: res.data,
    },
  };
};

export default IndexPage;
