import React, { useState } from 'react';
import Link from 'next/link';
import '../static/style/components/article-card.less';
import { timeFormater2 } from '../utils/timeUtils';

const ArticleCard = (props: any) => {
  let [activeImg, setActiveImg] = useState(false);

  // console.log(props);

  return (
    <div className="article-card">
      <div
        className="article-pic-container"
        onMouseLeave={() => setActiveImg(false)}
        onMouseEnter={() => setActiveImg(true)}
      >
        <Link href={'/details/' + props.article.id}>
          <div
            className={['article-pic-overlay', activeImg ? 'active' : ''].join(
              ' '
            )}
          >
            进去康康
          </div>
        </Link>
        <img
          className={activeImg ? 'active' : ''}
          src={'https://' + props.article.bannerSrc}
          alt=""
        />
      </div>

      <div className="intro">
        <h2>
          <Link href={'/details/' + props.article.id}>
            {props.article.title}
          </Link>
        </h2>
        <p>{props.article.introduce}</p>
      </div>
      <div className="divider"></div>
      <div className="article-info">
        <div className="item">
          <i className="iconfont icongeren"></i>
          <span>{props.article.author}</span>
        </div>
        <div className="item">
          <i className="iconfont iconshijian"></i>
          <span>
            {timeFormater2(
              'YYYY年mm月dd日',
              new Date(props.article.createTime)
            )}
          </span>
        </div>
        <div className="item">
          <i className="iconfont iconredu"></i>
          <span>{props.article.views}热度</span>
        </div>
        <div className="item">
          <i className="iconfont icondianzan1"></i>
          <span>{props.article.thumbs}喜欢</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
