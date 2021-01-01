import React, { useState, useEffect } from 'react';
import '../static/style/layout/footer.less';
import { Row, Col } from 'antd';
import { timeFormater1 } from '../utils/time';

const Footer = () => {
  const START_TIME = 1609305607787;

  let [runningTimes, setRunningTimes] = useState('');

  useEffect(() => {
    if (process.browser) {
      let option = {
        day: true,
        hour: true,
        min: true,
        sec: true,
      };
      setRunningTimes(timeFormater1(START_TIME, new Date().getTime(), option));
      setInterval(() => {
        setRunningTimes(
          timeFormater1(START_TIME, new Date().getTime(), option)
        );
      }, 1000);
    }
  }, []);

  return (
    <Row className="footer-container">
      <Col xs={0} sm={0} md={12} lg={12} xl={12} className="footer-left">
        系统已经运行：{runningTimes}
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12} className="footer-right">
        基于NextJS · 由抓住一股仙气运维 · © 2020 Copyright
      </Col>
    </Row>
  );
};
export default Footer;
