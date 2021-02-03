import React, { useEffect, useState } from 'react';
import { NextPageContext, NextPage } from 'next';
import Link from 'next/link';
import '../../static/style/pages/article-details.less';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import {
  getArticleList,
  thumbArticleById,
  viewArticleById,
} from '../../http/article';
import { timeFormater2 } from '../../utils/timeUtils';
import { message, Popover } from 'antd';
import moment from 'moment';

const Article: NextPage<any> = (props: any) => {
  const [html, setHtml] = useState('');
  const [articleInfo] = useState(props.asyncData.articleInfo);

  useEffect(() => {
    initHighLightJS();
    viewArticleById({ articleId: articleInfo.id });
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

  /**
   * 喜欢该文章
   */
  const thumbArticle = () => {
    thumbArticleById({ articleId: props.query.aid }).then(() => {
      message.success('点赞成功');
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
          <i className="iconfont iconredu"></i>
          <span>{articleInfo.views}热度</span>
          <i className="iconfont icondianzan1"></i>
          <span>{articleInfo.thumbs}个喜欢</span>
          <i className="iconfont icongangbi"></i>
          <span>{articleInfo.content.length}字数</span>
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
          <Link href="javascript:;">正文</Link>
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
          <div className="copy-right-container">
            <div className="left">
              <i className="iconfont iconshijian"></i>
              <span>
                最后修改:{' '}
                {moment(articleInfo.createTime).format('yyyy年MM月DD日')}
              </span>
            </div>
            <div className="right">
              <Popover content="转载请保留本文转载地址,著作权归作者所有">
                <span>© 允许规范转载</span>
              </Popover>
            </div>
          </div>
          <div className="thumb-container">
            <button className="pay">
              <i className="iconfont icon223yonghu_mima_yuechi3"></i> 赞赏
            </button>
            <button className="thumb" onClick={thumbArticle}>
              <i className="iconfont icondianzan1"></i>喜欢
            </button>
          </div>
          <div className="tips-container">
            如果觉得我的文章对你有用，请随意赞赏
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
    query: ctx.query,
  };
};

export default Article;
