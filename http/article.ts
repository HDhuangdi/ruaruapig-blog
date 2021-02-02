import { message } from 'antd';
import { promiseAPIGenerator } from '../utils/promiseUtils';
import HttpRequestMethod from '../interfaces/HttpRequestMethod';
import { mapObject2QueryString } from '../utils/commonUtils';

/**
 * 获取文章列表
 * @param data
 */
const getArticleList = (data: any) => {
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

/**
 * 点赞相应的文章
 * @param data
 */
const thumbArticleById = (data: any) => {
  return promiseAPIGenerator(
    HttpRequestMethod.POST,
    `/article/thumb`,
    data,
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

/**
 * 浏览相应的文章
 * @param data
 */
const viewArticleById = (data: any) => {
  return promiseAPIGenerator(
    HttpRequestMethod.POST,
    `/article/view`,
    data,
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

/**
 * 获取点赞数最多的文章
 */
const getTopThumbsArticles = () => {
  return promiseAPIGenerator(
    HttpRequestMethod.GET,
    `/article/topThumbs`,
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

/**
 * 获取浏览数最多的文章
 */
const getTopViewsArticles = () => {
  return promiseAPIGenerator(
    HttpRequestMethod.GET,
    `/article/topViews`,
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

/**
 * 按照关键词搜索文章
 * @param data  关键词
 */
const serachArticlesByKeyword = (data: any) => {
  return promiseAPIGenerator(
    HttpRequestMethod.GET,
    `/article/search` + mapObject2QueryString(data),
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

/**
 * 获取文章数量
 */
const getArticleCounts = () => {
  return promiseAPIGenerator(
    HttpRequestMethod.GET,
    `/article/count`,
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

/**
 * 获取访问次数
 */
const getVisitorCounts = () => {
  return promiseAPIGenerator(
    HttpRequestMethod.GET,
    `/system/visitors`,
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

export {
  getArticleList,
  getTopThumbsArticles,
  getTopViewsArticles,
  serachArticlesByKeyword,
  thumbArticleById,
  viewArticleById,
  getArticleCounts,
  getVisitorCounts,
};
