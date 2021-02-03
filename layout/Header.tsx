import React, { useState } from 'react';
import '../static/style/layout/header.less';
import Link from 'next/link';
import { serachArticlesByKeyword } from '../http/article';

const Header = () => {
  let [keyword, setKeyword] = useState('');
  let [searchReaultList, segSearchReaultList] = useState([]);
  let [canSearch, setCanSearch] = useState(true);
  let [isSearchVisible, setIsSearchVisible] = useState(false);

  if (process.browser) {
    window.onclick = () => {
      setIsSearchVisible(false);
    };
  }

  /**
   * 搜索逻辑
   * @param e
   */
  const search = (e: any) => {
    e.persist();
    setKeyword(e.target.value);
    if (e.target.value.length < 2) {
      setIsSearchVisible(false);
      return;
    }

    if (canSearch) {
      setCanSearch(false);
      setTimeout(() => {
        segSearchReaultList([]);
        if (e.target.value.length < 2) {
          setIsSearchVisible(false);
          setCanSearch(true);
          return;
        }
        serachArticlesByKeyword({ keyword: e.target.value }).then(
          (res: any) => {
            segSearchReaultList(res.data);
            setCanSearch(true);
            setIsSearchVisible(true);
          }
        );
      }, 1000);
    }
  };

  return (
    <header className="my-header">
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          value={keyword}
          onChange={search}
        />
        <i className="iconfont iconsousuo"></i>
        <ul
          className={[
            'search-result-container',
            isSearchVisible ? 'show' : '',
          ].join(' ')}
        >
          {searchReaultList.map((article: any) => (
            <li className="result-item" key={article.id}>
              <Link href={'/details/' + article.id}>
                <div className="result-title">{article.title}</div>
              </Link>
              <Link href={'/details/' + article.id}>
                <div className="result-content">
                  b我从阿萨德:<mark>啊</mark>撒大声地as
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="icons">
        <Link href="https://github.com/HDhuangdi">
          <i className="iconfont icongithub"></i>
        </Link>
        <i className="iconfont icon223yonghu_mima_yuechi3"></i>
      </div>
    </header>
  );
};

export default Header;
