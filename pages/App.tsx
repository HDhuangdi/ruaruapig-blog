import App, { Container } from 'next/app';
import React from 'react';
import 'antd/dist/antd.css';
import '../static/style/pages/comm.less';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';

export default class MyApp extends App {
  static async getInitialProps(arg: any) {
    let pageProps = {};

    if (arg.Component.getInitialProps) {
      pageProps = await arg.Component.getInitialProps(arg.ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ConfigProvider locale={zhCN}>
          <Component {...pageProps} />
        </ConfigProvider>
      </Container>
    );
  }
}
