import React from 'react';
import '../static/style/components/my-pagination.less';
import { Pagination } from 'antd';

const MyPagination = () => {
  return (
    <div className="my-pagination">
      <Pagination defaultCurrent={1} total={50} />
    </div>
  );
};

export default MyPagination;
