import Router from 'next/router';

function routerInterceptor() {
  Router.events.on('routeChangeStart', () => {
    document.getElementsByClassName('app-right')[0].scrollTop = 0;
  });
}

export default routerInterceptor;
