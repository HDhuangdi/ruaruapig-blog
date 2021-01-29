import { CHANGE_IS_LOGIN } from './actionTypes';

function changeIsLoginAction(isLogin: boolean) {
  return {
    type: CHANGE_IS_LOGIN,
    isLogin,
  };
}

export { changeIsLoginAction };
