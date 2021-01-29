import React from 'react';
import '../static/style/components/top-scroller.less';

const TopScroller = (props: any) => {
  const scrollToTop = () => {
    let element = document.getElementsByClassName('app-right')[0];
    let timer = setInterval(() => {
      let coefficient = element.scrollTop / 10;
      if (coefficient <= 0.01) {
        coefficient = 0;
      }
      if (element.scrollTop > 0) {
        element.scrollTop -= coefficient;
      } else {
        clearInterval(timer);
      }
    }, 1);
  };

  return (
    <div
      className={['scroll-to-top', props.showScrollToTop ? 'show' : ''].join(
        ' '
      )}
      onClick={scrollToTop}
    ></div>
  );
};

export default TopScroller;
