import React from 'react';
import '../static/style/layout/header.less';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="my-header">
      <div className="search">
        <input type="text" placeholder="Search..." />
        <i className="iconfont iconsousuo"></i>
      </div>
      <div className="icons">
        <Link href="https://github.com/HDhuangdi">
          <i className="iconfont icongithub"></i>
        </Link>

        <i className="iconfont icon223yonghu_mima_yuechi3"></i>
      </div>
    </div>
  );
};

export default Header;
