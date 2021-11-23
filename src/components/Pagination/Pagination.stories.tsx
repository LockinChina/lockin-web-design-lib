
import React, {useState} from 'react';

import {Meta} from '@storybook/react';

import Pagination from './index';

export default {
  component: Pagination,
  title: 'Components/Pagination',
} as Meta;

export const Primary: React.VFC<{}> = () => {
  const [page, setPage] = useState(1);
  return (
    <>
      <Pagination 
        total={123} 
        pageSize={20} 
        currentPage={page}
        paginate={e => setPage(e)}
      />
    </>
  )
}
  
;
