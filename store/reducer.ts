import { CHANGE_IS_LOGIN } from './actionTypes';

let defaultStore = {
  isLogin: false,
};

const reducer = (state = defaultStore, action: any) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    //变更登录状态
    case CHANGE_IS_LOGIN:
      newState.isLogin = action.isLogin;
      break;
    default:
      break;
  }
  return newState;
};

export default reducer;
