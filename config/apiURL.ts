const ipURL = `${
  process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:7001' : ''
}/default/`;
const servicePath = {
  getArticleList: ipURL + 'getArticleList', //首页
  article: ipURL + 'article/', //详细页
  typeInfo: ipURL + 'typeInfo/', //类别
  getArticleListByTypeId: ipURL + 'getArticleListByTypeId/', //根据类别id获得列表
  getArticleCount: ipURL + 'getArticleCount/', //获取文章总数
};

export default servicePath;
