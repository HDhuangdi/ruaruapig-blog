const ipURL = `${
  process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:7001' : ''
}/admin/`;
const servicePath = {
  getArticleList: ipURL + 'getArticleList', //首页
  article: ipURL + 'article/', //详细页
  typeInfo: ipURL + 'typeInfo/', //类别
  getArticleListByTypeId: ipURL + 'getArticleListByTypeId/', //根据类别id获得列表
};

export default servicePath;
