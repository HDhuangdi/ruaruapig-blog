import React, { useEffect, useState } from 'react';
import servicePath from '../config/apiURL';
import { NextPageContext } from 'next';
import axios from 'axios';
import { Row, Col } from 'antd';
import MySider from '../Layout/Sider';
import MyContent from '../Layout/Content';
import MyHeader from '../Layout/Header';
import '../static/style/pages/index.less';

const BlogList = () => {
  let [height, setHeight] = useState(0);
  let [index, setIndex] = useState(0);

  useEffect(() => {
    if (process.browser) {
      setHeight(window.innerHeight);
      window.onclick = showCursorText;
    }
  });

  let cursorText = [
    '富强',
    '民主',
    '文明',
    '和谐',
    '自由',
    '平等',
    '公正',
    '法治',
    '爱国',
    '敬业',
    '诚信',
    '友善',
  ];

  const showCursorText = (e: MouseEvent) => {
    let myIndex = index;
    if (myIndex >= cursorText.length) {
      myIndex = 0;
    }
    let text = cursorText[myIndex];
    let htmlSpanElement = document.createElement('span');
    htmlSpanElement.innerHTML = text;
    htmlSpanElement.style.position = 'absolute';
    htmlSpanElement.style.top = e.clientY - 10 + 'px';
    htmlSpanElement.style.left = e.clientX + 'px';
    htmlSpanElement.style.transition = 'all 0.5s';
    htmlSpanElement.style.animation = 'text-show 0.5s forwards';
    htmlSpanElement.style.userSelect = 'none';
    document.body.appendChild(htmlSpanElement);
    setIndex(myIndex + 1);
  };

  return (
    <div className="index" style={{ height }}>
      <div className="scroll-to-top"></div>
      <Row className="index-row">
        <Col className="index-left" xs={0} sm={0} md={0} lg={6} xl={5}>
          <MySider></MySider>
        </Col>
        <Col className="index-right" xs={24} sm={24} md={24} lg={18} xl={19}>
          <MyHeader></MyHeader>
          <MyContent></MyContent>
        </Col>
      </Row>
    </div>
  );
};

BlogList.getInitialProps = async (ctx: NextPageContext) => {
  let { page, pageSize } = ctx.query;
  let _page = Number(page as string) || 1;
  let _pageSize = Number(pageSize as string) || 10;
  const articleList = await axios.get(
    servicePath.getArticleList + `/${_page}/${_pageSize}`
  );
  const articleCount = await axios.get(servicePath.getArticleCount);

  return {
    asyncData: {
      page: _page,
      pageSize: _pageSize,
      articleList: articleList.data.data,
      articleCount: Number(articleCount.data),
    },
  };
};

export default BlogList;
