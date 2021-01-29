//获取页面数据
import {
  destroyLoadingMessage,
  loadingMessageGenerator,
  serverErrorMessageGenerator,
} from '../utils/antdUtils';
import axios from './index';
import { message } from 'antd';
import { AxiosResponse } from 'axios';

/**
 * 获取文章列表
 * @param pageNum
 * @param pageSize
 */
const getArticleList = async (pageNum: number, pageSize = 10) => {
  return new Promise((resolve: any) => {
    loadingMessageGenerator(1);
    axios
      .get(`/article/list?pageNum=${pageNum}&pageSize=${pageSize}`)
      .then((res: AxiosResponse) => {
        destroyLoadingMessage(1);
        if (res.data.code === 200) {
          resolve(res.data);
        } else {
          message.error(res.data.message);
        }
      })
      .catch(() => {
        message.destroy(0);
        serverErrorMessageGenerator();
      });
  });
};

export { getArticleList };
