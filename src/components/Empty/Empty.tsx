import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import emptyIcon from '../../static/images/icon-empty.png';

const EmptyContainer = styled.div`
  width: 100%;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  .emptyicon {
    width: 140px;
    height: 118px;
    background: url(${emptyIcon}) no-repeat;
    background-size: contain;
    margin-bottom: 20px;
  }
  p {
    color: #999;
  }
  a {
    color: #2b2dad;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export interface EmptyProps {
  link?: string; // 链接地址 不添加则为不可点击状态
  message?: string; // 文本
  blank?: boolean; // 是否打开新窗口
}

const Empty: React.FC<EmptyProps> = (props) => {
  const {link, message, blank} = props;
  return (
    <EmptyContainer>
      <div className='emptyicon' />
      {link ? (
        <a rel='noreferrer' target={blank ? '_blank' : '_self'} href={link}>
          {message}
        </a>
      ) : (
        <p>{message}</p>
      )}
    </EmptyContainer>
  );
};

Empty.defaultProps = {
  message: '111',
  link: '',
  blank: !true,
};

Empty.propTypes = {
  link: PropTypes.string,
  message: PropTypes.string,
  blank: PropTypes.bool,
};

export default Empty;
