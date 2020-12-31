import App, { Container } from 'next/app';
import Head from 'next/head';
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
        <Head>
          <title>小黄的博客</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            href="http://at.alicdn.com/t/font_2299715_p736nwlatn.css"
          />
        </Head>
        <ConfigProvider locale={zhCN}>
          <Component {...pageProps} />
        </ConfigProvider>
      </Container>
    );
  }
}
