/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {FC} from 'react';
import styled from 'styled-components';
import {FontAwesomeIconProps} from '@fortawesome/react-fontawesome';
import {Icon} from '../../index';

const NoContentBox = styled.div`
  padding: 100px 30px;
  text-align: center;
  p {
    font-size: 15px;
    padding: 20px 0;
    color: #888;
  }
`;
export interface NoCProps extends FontAwesomeIconProps {
  messageText?: string;
}

const NoContent: FC<NoCProps> = ({messageText, icon, size, ...restProps}) => {
  return (
    <NoContentBox>
      <div>
        <Icon
          icon={icon || 'file-code'}
          size={size || '4x'}
          color="#ccc"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...restProps}
        />
      </div>
      <p>{messageText}</p>
    </NoContentBox>
  );
};

NoContent.defaultProps = {
  messageText: '暂无数据',
};
export default NoContent;
