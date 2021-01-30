import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import '../../static/style/pages/article-details.less';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import { NextPageContext } from 'next';
import { getArticleList } from '../../http/article';
import { timeFormater2 } from '../../utils/timeUtils';

const Article = (props: any) => {
  const [html, setHtml] = useState('');
  const [articleInfo] = useState(props.asyncData.articleInfo);

  useEffect(() => {
    initHighLightJS();
  }, []);

  /**
   * 初始化HighLightJS
   */
  const initHighLightJS = () => {
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false,
      highlight(code: string) {
        return hljs.highlightAuto(code).value;
      },
    });
    setHtml(articleInfo.content ? marked(articleInfo.content) : null);
    setTimeout(() => {
      let eleList = document.querySelectorAll('pre code');
      eleList.forEach((ele) => {
        ele.className += ' hljs';
      });
    });
  };

  return (
    <div className="article-details">
      <div className="title-container">
        <h1>{articleInfo.title}</h1>
        <div className="info-container">
          <i className="iconfont icongeren"></i>
          <span>{articleInfo.author}</span>
          <i className="iconfont iconshijian"></i>
          <span>
            {timeFormater2('YYYY年mm月dd日', new Date(articleInfo.createTime))}
          </span>
          <i className="iconfont iconliulan"></i>
          <span>{articleInfo.views}次浏览</span>
          <i className="iconfont iconpinglun2"></i>
          <span>{articleInfo.thumbs} 条评论</span>
          <i className="iconfont icongangbi"></i>
          <span>3644字数</span>
        </div>
        <div className="tags">
          #
          {articleInfo.tags.map((tag: any) => {
            return <span key={tag.id}>&nbsp;{tag.name}</span>;
          })}
        </div>
      </div>
      <main>
        <div className="crumbs">
          <i className="iconfont iconfaxian-copy"></i>
          <Link href="/">首页</Link>
          <span>/</span>
          <Link href="/">正文</Link>
        </div>
        <div className="article-container">
          <img
            src={'https://' + articleInfo.bannerSrc}
            alt=""
            className="banner"
          />
          <div
            className="markdown-container"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </div>
        <div className="comment-editer">
          <h4>发表评论</h4>
          <div className="comment-form">
            <label>评论</label>
            <textarea
              id=""
              cols={30}
              rows={5}
              placeholder="说点什么吧"
            ></textarea>
            <label>名称（必填）：</label>
            <input type="text" placeholder="姓名或昵称" maxLength={10} />
            <button>发表评论</button>
          </div>
        </div>
        <div className="comment-list">
          <h5>666条评论</h5>
          <div className="commnet-item">
            <div className="comment-info">
              <div className="comment-info-left">
                <img
                  src="../../static/images/article-details/avatar.png"
                  alt=""
                />
              </div>
              <div className="comment-info-right">
                <h6>马化腾</h6>
                <span>2020/12/19 13:13</span>
              </div>
            </div>
            <div className="comment-detail">不错不错！</div>
          </div>
          <div className="commnet-item">
            <div className="comment-info">
              <div className="comment-info-left">
                <img
                  src="../../static/images/article-details/avatar.png"
                  alt=""
                />
              </div>
              <div className="comment-info-right">
                <h6>马云</h6>
                <span>2020/12/19 13:13</span>
              </div>
            </div>
            <div className="comment-detail">小伙子有前途！</div>
          </div>
        </div>
      </main>
    </div>
  );
};

Article.getInitialProps = async (ctx: NextPageContext) => {
  let articleId = ctx.query.aid;
  let res: any;
  res = await getArticleList({ id: articleId });

  return {
    asyncData: {
      articleInfo: res.data.list[0],
    },
  };
};

export default Article;
