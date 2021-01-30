import { message } from 'antd';
import { promiseAPIGenerator } from '../utils/promiseUtils';
import HttpRequestMethod from '../interfaces/HttpRequestMethod';
import { mapObject2QueryString } from '../utils/commonUtils';

/**
 * 获取文章列表
 * @param data
 */
const getArticleList = async (data: any) => {
  return promiseAPIGenerator(
    HttpRequestMethod.GET,
    `/article/list` + mapObject2QueryString(data),
    (resolve: any, res: any) => {
      if (res.data.code === 200) {
        resolve(res.data);
      } else {
        if (!process.browser) return;
        message.error(res.data.message);
      }
    }
  );
};

export { getArticleList };
