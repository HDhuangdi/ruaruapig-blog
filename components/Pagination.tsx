import React from 'react';
import '../static/style/components/my-pagination.less';
import { Pagination } from 'antd';

const MyPagination = (props: any) => {
  return (
    <div className="my-pagination">
      <Pagination
        defaultCurrent={props.pageInfo.pageNum}
        total={props.pageInfo.total}
        onChange={props.pageChangeHandler}
      />
    </div>
  );
};

export default MyPagination;
