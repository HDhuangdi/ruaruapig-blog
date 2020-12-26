import Head from 'next/head';
import { NextPage, NextPageContext } from 'next';
import axios from 'axios';
import Header from '../../components/Header';
import { Row, Col, Breadcrumb, Affix } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import Author from '../../components/Author';
import Advert from '../../components/Advert';
import Footer from '../../components/Footer';
import CodeBlock from '../../components/CodeBlock';
import '../../static/style/pages/details.less';
import servicePath from '../../config/apiURL';
import ReactMarkdown from 'react-markdown';

interface IProps {
  asyncData: {
    article: any;
  };
}

const Details: NextPage<IProps> = (props: IProps) => {
  const { article } = props.asyncData;
  let markdown = article.article_content;

  return (
    <div>
      <Head>
        <title>{article.title}</title>
      </Head>
      <Header />
      <Row className="comm-main" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          {/* 面包屑导航 */}
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="/">首页</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{article.title}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              {/* 博客标题 */}
              <div className="detailed-title">{article.title}</div>
            </div>
            {/* 博客信息 */}
            <div className="list-icon center">
              <span>
                <CalendarOutlined />
                {article.add_time}
              </span>
            </div>
            {/* 博客内容 */}
            <div className="detailed-content">
              <ReactMarkdown
                source={markdown}
                renderers={{
                  code: CodeBlock,
                }}
              ></ReactMarkdown>
            </div>
          </div>
        </Col>
        {/* 右侧信息 */}
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author></Author>
          <Advert></Advert>
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer></Footer>
    </div>
  );
};

Details.getInitialProps = async (ctx: NextPageContext) => {
  const { aid } = ctx.query;
  const res = await axios.get(servicePath.article + aid);
  return { asyncData: { article: res.data } };
};

export default Details;
