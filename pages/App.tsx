import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import 'antd/dist/antd.css';
import '../static/style/pages/base.less';
import '../static/style/pages/app.less';
import zhCN from 'antd/lib/locale/zh_CN';
import { Col, ConfigProvider, Row, Tabs } from 'antd';
import MySider from '../Layout/Sider';
import MyHeader from '../Layout/Header';
import Link from 'next/link';
import MyFooter from '../Layout/Footer';
import { timeFormater1 } from '../utils/time';
const { TabPane } = Tabs;

type State = {
  height: number;
  index: number;
  showScrollToTop: boolean;
  timer: any;
  runningDays: string;
};

export default class MyApp extends App<any, any, State> {
  CURSOR_TEXT = [
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
  START_TIME = 1609305607787;

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
      timer: 0,
      runningDays: '',
    };
  }

  componentDidMount() {
    let option = {
      day: true,
      hour: true,
    };

    this.setState({
      height: window.innerHeight,
      runningDays: timeFormater1(this.START_TIME, new Date().getTime(), option),
    });
    setInterval(() => {
      this.setState({
        runningDays: timeFormater1(
          this.START_TIME,
          new Date().getTime(),
          option
        ),
      });
    }, 1000);

    window.onclick = this.showCursorText.bind(this);
  }

  /**
   * 鼠标点击出现社会主义核心价值观
   * @param e
   */
  showCursorText(e: MouseEvent) {
    clearTimeout(this.state.timer);
    let myIndex = this.state.index;
    if (myIndex >= this.CURSOR_TEXT.length) {
      myIndex = 0;
    }
    let text = this.CURSOR_TEXT[myIndex];
    let htmlSpanElement = document.createElement('span');
    let container = document.getElementById('cursor-text-container');
    htmlSpanElement.innerHTML = text;
    htmlSpanElement.style.position = 'absolute';
    htmlSpanElement.style.top = e.clientY - 10 + 'px';
    htmlSpanElement.style.left = e.clientX + 'px';
    htmlSpanElement.style.animation = 'text-show 1.5s forwards';
    htmlSpanElement.style.userSelect = 'none';
    if (container) {
      container.appendChild(htmlSpanElement);
      this.setState({
        index: myIndex + 1,
        timer: setTimeout(() => {
          // @ts-ignore
          container.innerHTML = '';
        }, 4000),
      });
    }
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
    let element = document.getElementsByClassName('app-right')[0];
    let timer = setInterval(() => {
      let coefficient = element.scrollTop / 10;
      if (coefficient <= 0.01) {
        coefficient = 0;
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
            {/*上吊猫*/}
            <div
              className={[
                'scroll-to-top',
                this.state.showScrollToTop ? 'show' : '',
              ].join(' ')}
              onClick={() => this.scrollToTop()}
            ></div>
            <Row className="app-row">
              {/*总体左边布局*/}
              <Col className="app-left" xs={0} sm={0} md={0} lg={6} xl={5}>
                {/*左侧边栏*/}
                <MySider></MySider>
              </Col>
              {/*总体右边布局*/}
              <Col
                className="app-right"
                xs={24}
                sm={24}
                md={24}
                lg={18}
                xl={19}
                onScroll={(e) => this.scrollHanlder(e)}
              >
                {/*头部组件*/}
                <MyHeader></MyHeader>
                <Row style={{ width: '100%' }}>
                  {/*路由显示区域*/}
                  <Col
                    className="content-left"
                    xs={24}
                    sm={24}
                    md={18}
                    lg={18}
                    xl={18}
                  >
                    <Component {...pageProps} />
                  </Col>
                  {/*右侧边栏*/}
                  <Col
                    className="content-right"
                    xs={0}
                    sm={0}
                    md={6}
                    lg={6}
                    xl={6}
                  >
                    <div className="content-right-tabs">
                      <Tabs defaultActiveKey="1">
                        <TabPane
                          tab={<i className="iconfont icondianzan"></i>}
                          key="1"
                        >
                          <h5 className="title-btn hot-articles-title">
                            热门文章
                          </h5>
                          <ul className="hot-articles-list">
                            <li className="hot-article">
                              <div className="hot-article-left">
                                <Link href="/">
                                  <img
                                    src="../static/images/index/article-avatar.jpg"
                                    alt=""
                                  />
                                </Link>
                              </div>
                              <div className="hot-article-right">
                                <Link href="/">
                                  宝塔(BT)面板安装 AList 阿里云盘列表程序
                                </Link>
                                <div className="hot-article-comments">
                                  <i className="iconfont iconpinglun2"></i>
                                  <span>996</span>
                                </div>
                              </div>
                            </li>
                            <li className="hot-article">
                              <div className="hot-article-left">
                                <Link href="/">
                                  <img
                                    src="../static/images/index/article-avatar.jpg"
                                    alt=""
                                  />
                                </Link>
                              </div>
                              <div className="hot-article-right">
                                <Link href="/">
                                  宝塔(BT)面板安装 AList 阿里云盘列表程序
                                </Link>
                                <div className="hot-article-comments">
                                  <i className="iconfont iconpinglun2"></i>
                                  <span>996</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </TabPane>
                        <TabPane
                          tab={<i className="iconfont iconpinglun1"></i>}
                          key="2"
                        >
                          <h5 className="title-btn">最新评论</h5>
                          <ul>
                            <li className="new-comment">
                              <div className="new-comment-left">
                                <Link href="/">
                                  <img
                                    src="../static/images/index/article-avatar.jpg"
                                    alt=""
                                  />
                                </Link>
                              </div>
                              <div className="new-comment-right">
                                <div className="username">John</div>
                                <div className="details">
                                  卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽
                                </div>
                              </div>
                            </li>
                            <li className="new-comment">
                              <div className="new-comment-left">
                                <Link href="/">
                                  <img
                                    src="../static/images/index/article-avatar.jpg"
                                    alt=""
                                  />
                                </Link>
                              </div>
                              <div className="new-comment-right">
                                <div className="username">John</div>
                                <div className="details">
                                  卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽
                                </div>
                              </div>
                            </li>
                          </ul>
                        </TabPane>
                      </Tabs>
                    </div>
                    <div className="blog-info">
                      <div className="title-btn">博客信息</div>
                      <ul>
                        <li>
                          <div>
                            <i className="iconfont iconwenzhang"></i>
                            <h6>文章数目</h6>
                          </div>
                          <span>157篇</span>
                        </li>
                        <li>
                          <div>
                            <i className="iconfont iconpinglun"></i>
                            <h6>评论数目</h6>
                          </div>
                          <span>1123条</span>
                        </li>
                        <li>
                          <div>
                            <i className="iconfont iconrili"></i>
                            <h6>运行天数</h6>
                          </div>
                          <span>{this.state.runningDays}</span>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
                {/*脚部组件*/}
                <MyFooter></MyFooter>
              </Col>
            </Row>
          </div>
          <div id="cursor-text-container"></div>
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
