import React, { useState } from 'react';
import Link from 'next/link';
import '../static/style/components/article-card.less';

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
          <Link href="/aaaa">111</Link>
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
          <span>{props.article.createTime}</span>
        </div>
        <div className="item">
          <i className="iconfont iconliulan"></i>
          <span>{props.article.views}浏览</span>
        </div>
        <div className="item">
          <i className="iconfont iconpinglun2"></i>
          <span>{props.article.thumbs}条评论</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
