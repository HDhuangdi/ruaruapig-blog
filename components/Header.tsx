import React from 'react';
import { NextPage } from 'next';
import Router from 'next/router';
import '../static/style/components/header.less';
import { Row, Col, Menu } from 'antd';
import { HomeFilled } from '@ant-design/icons';

const Header: NextPage = () => {
  const handleClick = (e: any) => {
    if (e.key == 0) {
      Router.push('/');
    }
  };
  return (
    <div className="header">
      <Row justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">小黄的学习笔记</span>
          <span className="header-txt">是个前端秃子没错了</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={8}>
          <Menu mode="horizontal" onClick={handleClick}>
            <Menu.Item key="0">
              <HomeFilled />
              首页
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
