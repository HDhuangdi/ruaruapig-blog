import App, { Container } from 'next/app';
import PageHead from '../components/PageHead';
import React from 'react';
import zhCN from 'antd/lib/locale/zh_CN';
import { Col, ConfigProvider, Row } from 'antd';
import 'antd/dist/antd.css';
import '../static/style/base.less';
import '../static/style/pages/app.less';
import MySider from '../layout/Sider';
import MyHeader from '../layout/Header';
import RightSider from '../layout/RightSider';
import MyFooter from '../layout/Footer';
import CursorText from '../components/CursorText';
import TopScroller from '../components/TopScroller';

import routerConfig from '../router';

routerConfig.routerInterceptor();

type State = {
  height: number;
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
      showScrollToTop: false,
    };
  }

  componentDidMount() {
    this.setState({
      height: window.innerHeight,
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

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        {/*网页头部元信息*/}
        <PageHead></PageHead>
        <ConfigProvider locale={zhCN}>
          <div id="app" style={{ height: this.state.height }}>
            {/*上吊猫*/}
            <TopScroller
              showScrollToTop={this.state.showScrollToTop}
            ></TopScroller>
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
                    <RightSider></RightSider>
                  </Col>
                </Row>
                {/*脚部组件*/}
                <MyFooter></MyFooter>
              </Col>
            </Row>
          </div>
          {/*鼠标文字*/}
          <CursorText></CursorText>
        </ConfigProvider>
      </Container>
    );
  }
}
