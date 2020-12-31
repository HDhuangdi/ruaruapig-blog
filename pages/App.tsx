import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import 'antd/dist/antd.css';
import '../static/style/pages/comm.less';
import '../static/style/pages/app.less';
import zhCN from 'antd/lib/locale/zh_CN';
import { Col, ConfigProvider, Row } from 'antd';
import MySider from '../Layout/Sider';
import MyHeader from '../Layout/Header';

type State = {
  height: number;
  index: number;
  showScrollToTop: boolean;
};

export default class MyApp extends App<any, any, State> {
  static async getInitialProps(arg: any) {
    let pageProps = {};
    if (arg.Component.getInitialProps) {
      pageProps = await arg.Component.getInitialProps(arg.ctx);
    }
    return { pageProps };
  }

  constructor(props: any) {
    super(props);
    this.state = {
      height: 0,
      index: 0,
      showScrollToTop: false,
    };
  }
  componentDidMount() {
    this.setState({
      height: window.innerHeight,
    });
    window.onclick = this.showCursorText.bind(this);
  }

  cursorText = [
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

  /**
   * 鼠标点击出现社会主义核心价值观
   * @param e
   */
  showCursorText(e: MouseEvent) {
    let myIndex = this.state.index;
    if (myIndex >= this.cursorText.length) {
      myIndex = 0;
    }
    let text = this.cursorText[myIndex];
    let htmlSpanElement = document.createElement('span');
    htmlSpanElement.innerHTML = text;
    htmlSpanElement.style.position = 'absolute';
    htmlSpanElement.style.top = e.clientY - 10 + 'px';
    htmlSpanElement.style.left = e.clientX + 'px';
    htmlSpanElement.style.transition = 'all 0.5s';
    htmlSpanElement.style.animation = 'text-show 0.5s forwards';
    htmlSpanElement.style.userSelect = 'none';
    document.body.appendChild(htmlSpanElement);
    this.setState({
      index: myIndex + 1,
    });
  }

  /**
   * 计算上吊猫出现时机
   * @param e
   */
  scrollHanlder(e: any) {
    this.setState({
      showScrollToTop: e.target.scrollTop >= 250,
    });
  }

  /**
   * 回到顶部
   */
  scrollToTop() {
    let element = document.getElementsByClassName('index-right')[0];
    let timer = setInterval(() => {
      let coefficient = element.scrollTop / 30;
      if (coefficient <= 1) {
        coefficient = 1;
      }
      if (element.scrollTop > 0) {
        element.scrollTop -= coefficient;
      } else {
        clearInterval(timer);
      }
    }, 1);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>Aries's Blog</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            href="http://at.alicdn.com/t/font_2299715_ye8gyur0e5.css"
          />
        </Head>
        <ConfigProvider locale={zhCN}>
          <div id="app" style={{ height: this.state.height }}>
            <div
              className={[
                'scroll-to-top',
                this.state.showScrollToTop ? 'show' : '',
              ].join(' ')}
              onClick={() => this.scrollToTop()}
            ></div>
            <Row className="index-row">
              <Col className="index-left" xs={0} sm={0} md={0} lg={6} xl={5}>
                <MySider></MySider>
              </Col>
              <Col
                className="index-right"
                xs={24}
                sm={24}
                md={24}
                lg={18}
                xl={19}
                onScroll={(e) => this.scrollHanlder(e)}
              >
                <MyHeader></MyHeader>
                <Component {...pageProps} />
              </Col>
            </Row>
          </div>
        </ConfigProvider>
      </Container>
    );
  }
}

// MyApp.getInitialProps = async (ctx: NextPageContext) => {
//   let { page, pageSize } = ctx.query;
//   let _page = Number(page as string) || 1;
//   let _pageSize = Number(pageSize as string) || 10;
//   const articleList = await axios.get(
//       servicePath.getArticleList + `/${_page}/${_pageSize}`
//   );
//   const articleCount = await axios.get(servicePath.getArticleCount);
//
//   return {
//     asyncData: {
//       page: _page,
//       pageSize: _pageSize,
//       articleList: articleList.data.data,
//       articleCount: Number(articleCount.data),
//     },
//   };
// };
