import React, { useEffect, useState } from 'react';
import '../static/style/components/cursor-text.less';
import store from '../store';
import { changeIsLoginAction } from '../store/actions';

const CursorText = () => {
  //TODO test redux
  useEffect(() => {
    store.dispatch(changeIsLoginAction(true));
  }, []);

  let [timer, setTimer] = useState(0);

  let [index, setIndex] = useState(0);

  //鼠标文字
  const CURSOR_TEXT = [
    '富强',
    '民主',
    '文明',
    '和谐',
    '自由',
    '平等',
    '公正',
    '法治',
    '爱国',
    '敬业',
    '诚信',
    '友善',
  ];
  /**
   * 鼠标点击出现社会主义核心价值观
   * @param e
   */
  const showCursorText = (e: MouseEvent) => {
    clearTimeout(timer);
    let myIndex = index;
    if (myIndex >= CURSOR_TEXT.length) {
      myIndex = 0;
    }

    let text = CURSOR_TEXT[myIndex];

    let htmlSpanElement = document.createElement('span');
    let container = document.getElementById('cursor-text-container');
    htmlSpanElement.innerHTML = text;
    htmlSpanElement.style.position = 'absolute';
    htmlSpanElement.style.top = e.clientY - 10 + 'px';
    htmlSpanElement.style.left = e.clientX + 'px';
    htmlSpanElement.style.animation = 'text-show 1.5s forwards';
    htmlSpanElement.style.userSelect = 'none';
    if (container != null) {
      container.appendChild(htmlSpanElement);
      setIndex(++myIndex);
      setTimer(
        // @ts-ignore
        setTimeout(() => {
          // @ts-ignore
          container.innerHTML = '';
        }, 4000)
      );
    }
  };

  if (process.browser) {
    window.onclick = showCursorText;
  }

  return <div id="cursor-text-container"></div>;
};

export default CursorText;
