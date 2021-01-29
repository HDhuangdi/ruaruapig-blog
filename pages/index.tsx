import React, { useEffect, useState } from 'react';
import '../static/style/pages/index.less';
import ArticleCard from '../components/ArticleCard';
import MyPagination from '../components/Pagination';
import axios from '../http';
import { NextPageContext } from 'next';
import baseUrl from '../config/baseUrl';

const IndexPage = (props: any) => {
  let [pageInfo, setPageInfo] = useState(props.asyncData.pageInfo);

  useEffect(() => {
    //初始化页面数据 - CSR
    axios.get(`/api/article/list`).then((res: any) => {
      setPageInfo(res.data.data);
    });
  }, []);

  const pageChangeHandler = (page: number, pageSize: number) => {
    console.log(page, pageSize);
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
IndexPage.getInitialProps = async (ctx: NextPageContext) => {
  let env = process.env.NODE_ENV.toUpperCase();
  let { page, pageSize } = ctx.query;
  let _pageNum = Number(page) || 1;
  let _pageSize = Number(pageSize) || 10;

  const { data } = await axios.get(
    // @ts-ignore
    baseUrl[env] + `/article/list?pageNum=${_pageNum}&pageSize=${_pageSize}`
  );

  return {
    asyncData: {
      pageInfo: data.data,
    },
  };
};

export default IndexPage;
