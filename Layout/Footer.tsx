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
    <div className="footer-container">
      <Row className="system-info-container">
        <Col xs={0} sm={0} md={12} lg={12} xl={12} className="runningTime">
          系统已经运行：{runningTimes}
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="copyright">
          基于NextJS · 由抓住一股仙气运维 · © 2020 Copyright
        </Col>
      </Row>
      <Row className="beian-container">
        <Col xs={24} sm={24} md={24} lg={24} xl={24} className="beian">
          <a href="https://beian.miit.gov.cn" target="_blank">
            浙ICP备2021001093号-1
          </a>
          <a
            target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010802011395"
          >
            <img src="../static/images/layout/footer/beian.png" />
            <span>浙公网安备 33010802011395号</span>
          </a>
        </Col>
      </Row>
    </div>
  );
};
export default Footer;
