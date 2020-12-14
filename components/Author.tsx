import { Avatar, Divider } from 'antd';
import Link from 'next/link';
import '../static/style/components/author.less';

const Author = () => {
  return (
    <div className="author-div comm-box">
      <div>
        <Avatar size={100} src="../static/images/author.png"></Avatar>
        <div className="author-introduction">
          小黄是个前端程序员
          <Divider>社交</Divider>
          <Link href="https://github.com/HDhuangdi">
            <Avatar
              size={28}
              src="../static/images/github.png"
              className="social"
            ></Avatar>
          </Link>
          <Link href="https://i.csdn.net/#/uc/profile?spm=1000.2115.3001.5111">
            <Avatar
              size={28}
              src="../static/images/csdn.png"
              className="social"
            ></Avatar>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Author;
