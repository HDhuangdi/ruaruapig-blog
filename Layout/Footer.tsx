import React, { useState, useEffect } from 'react';
import '../static/style/layout/footer.less';
import { Row, Col } from 'antd';

const Footer = () => {
  let startTime = 1609305607787;

  const cutDown = (nowTime: number): string => {
    let diffTime = nowTime - startTime;
    let day = Math.floor(diffTime / 1000 / 3600 / 24);
    let hour = Math.floor((diffTime - 24 * 3600 * 1000 * day) / 1000 / 3600);
    let min = Math.floor(
      (diffTime - 24 * 3600 * 1000 * day - 3600 * 1000 * hour) / 1000 / 60
    );
    let sec = Math.floor(
      (diffTime -
        24 * 3600 * 1000 * day -
        3600 * 1000 * hour -
        1000 * 60 * min) /
        1000
    );
    return `${day} 天 ${hour} 时 ${min} 分 ${sec} 秒`;
  };
  let [cutDownTime, setCutDownTime] = useState('');

  useEffect(() => {
    if (process.browser) {
      setCutDownTime(cutDown(new Date().getTime()));
      setInterval(() => {
        setCutDownTime(cutDown(new Date().getTime()));
      }, 1000);
    }
  }, []);

  return (
    <Row className="footer-container">
      <Col xs={0} sm={0} md={12} lg={12} xl={12} className="footer-left">
        系统已经运行：{cutDownTime}
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12} className="footer-right">
        基于NextJS · 由抓住一股仙气运维 · © 2020 Copyright
      </Col>
    </Row>
  );
};
export default Footer;
