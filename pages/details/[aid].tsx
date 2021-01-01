import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import '../../static/style/pages/article-details.less';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import MyPagination from '../../components/Pagination';

const Article = () => {
  const [html, setHtml] = useState('');
  useEffect(() => {
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
    setHtml(markdown ? marked(markdown) : null);
    setTimeout(() => {
      let eleList = document.querySelectorAll('pre code');
      eleList.forEach((ele) => {
        ele.className += ' hljs';
      });
    });
  }, []);

  let markdown =
    '## 介绍 \n' +
    '软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑**可重用性**。 组件不仅能够支持当前的数据类型，同时也能**支持未来的数据类型**，这在创建大型系统时为你提供了十分灵活的功能。\n' +
    '使用**泛型**来创建可重用的组件，一个组件可以**支持多种类型的数据**。 这样用户就可以以自己的数据类型来使用组件。\n' +
    '\n' +
    '如果一个函数不使用泛型的话，如：\n' +
    '```typescript\n' +
    'function fn(arg: number): number {\n' +
    '    return arg;\n' +
    '}\n' +
    '```\n' +
    '`fn`函数只能传入number类型的值，也只能返回number类型的值。\n' +
    '\n' +
    ' - 如果我们现在有一个需求：需要`fn`函数既支持传入`number`类型，也支持传入`string`类型，且传入什么类型，返回值也需要是什么类型。\n' +
    '\n' +
    '这时就需要用到**泛型**了。\n' +
    '\n' +
    '泛型标识符为`<T>,`其中`T`可为任何字母，但是一般都写作`T`，`fn`函数使用`<T>`来捕获传入的类型。\n' +
    '\n' +
    '以下为改造后的`fn`函数：\n' +
    '```typescript\n' +
    'function fn<T>(arg: T): T {\n' +
    '    return arg;\n' +
    '}\n' +
    'console.log(fn<nubmer>(123))  // 123 \n' +
    "console.log(fn<string>('你说啥子'))  //你说啥子\n" +
    '```\n' +
    '\n' +
    '> 其实，泛型就是让函数**调用**时（类实例创建时）制定类型，而不是函数（类）定义时制定类型。\n' +
    '\n' +
    '同时，泛型也可以用于类的类型约束\n' +
    '```typescript\n' +
    '//泛型类\n' +
    'class MinClass<T> {\n' +
    '  list: T[] = [];\n' +
    '  add(num: T): void {\n' +
    '    this.list.push(num);\n' +
    '  }\n' +
    '  /**\n' +
    '   * 寻找一个数组中最小值\n' +
    '   * @method getMin\n' +
    '   * @returns {T} 最小值\n' +
    '   */\n' +
    '  getMin(): T {\n' +
    '    let min = this.list[0];\n' +
    '    for (let index = 0, length = this.list.length; index < length; index++) {\n' +
    '      if (min > this.list[index]) {\n' +
    '        min = this.list[index];\n' +
    '      }\n' +
    '    }\n' +
    '    return min;\n' +
    '  }\n' +
    '}\n' +
    '//实例\n' +
    'var m = new MinClass<number>();\n' +
    'm.add(1);\n' +
    'm.add(2);\n' +
    'm.add(13);\n' +
    'm.add(-1);\n' +
    'console.log(m.getMin());  //-1\n' +
    '\n' +
    'var m2 = new MinClass<string>();\n' +
    'm.add("z");\n' +
    'm.add("b");\n' +
    'm.add("c");\n' +
    'm.add("d");\n' +
    'console.log(m.getMin());  //b\n' +
    '```\n' +
    '\n' +
    '其实，泛型还可用于接口的描述\n' +
    '```typescript\n' +
    '//泛型接口\n' +
    '\n' +
    '/**\n' +
    ' * @interface ConfigFN\n' +
    ' */\n' +
    'interface ConfigFN {\n' +
    '  <T>(value: T): T;\n' +
    '}\n' +
    'var getData: ConfigFN = function (value) {\n' +
    '  return value;\n' +
    '};\n' +
    'console.log(getData<number>(123));  //123\n' +
    '```\n' +
    '也可以对泛型进行约束\n' +
    '```typescript\n' +
    'function getNum<T extends number | string>(num: T): number {\n' +
    '  return Number(num);\n' +
    '}\n' +
    '\n' +
    'getNum("123");\n' +
    'getNum(123);\n' +
    'getNum(true) //报错 类型“boolean”的参数不能赋给类型“string | number”的参数。\n' +
    '```';
  return (
    <div className="article-details">
      <div className="title-container">
        <h1>宝塔(BT)面板安装 AList 阿里云盘列表程序</h1>
        <div className="info-container">
          <i className="iconfont icongeren"></i>
          <span>抓住一股仙气</span>
          <i className="iconfont iconshijian"></i>
          <span>2020 年 12 月 28 日</span>
          <i className="iconfont iconliulan"></i>
          <span>441次浏览</span>
          <i className="iconfont iconpinglun2"></i>
          <span>3 条评论</span>
          <i className="iconfont icongangbi"></i>
          <span>3644字数</span>
        </div>
        <div className="tags">
          # &nbsp;
          <span>建站知识</span>
          &nbsp;
          <span>网络资源</span>
          &nbsp;
          <span>技术经验</span>
          &nbsp;
          <span>软件相关</span>
          &nbsp;
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
            src="../../static/images/components/article-card/main.jpg"
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
          <MyPagination></MyPagination>
        </div>
      </main>
    </div>
  );
};

export default Article;
