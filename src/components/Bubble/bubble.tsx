import React, {FC} from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import {Image} from '../../index';
import {ImageProps} from '../Image/image';

const BubbleContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  padding: 5px 0;
  .imx {
    width: 36px;
    margin-left: 0px;
  }
  .mess {
    margin-left: 10px;
    margin-right: 0px;
    .name {
      font-size: 12px;
      line-height: 13px;
      margin-bottom: 5px;
      color: #777;
    }
    .msgbox {
      background: #f1f0f0;
      padding: 13px;
      font-size: 12px;
      line-height: 1.5;
      border-radius: 0px 10px 10px 10px;
      word-break: break-all;
      white-space: normal;
      color: #000;
    }
  }
  &.roleAt {
    flex-direction: row-reverse;
    float: right;
    .imx {
      margin-right: 0px !important;
    }
    .mess {
      margin-left: 0px;
      margin-right: 10px;
      .name {
        text-align: right;
      }
      .msgbox {
        background: #0084ff;
        color: #fff;
        border-radius: 10px 0px 10px 10px;
      }
    }
  }
`;

export interface BubbleProps extends ImageProps {
  imUrl: string;
  messageText?: any;
  roleAt?: boolean | undefined;
  userName?: string;
}

const Bubble: FC<BubbleProps> = (props) => {
  const {imUrl, roleAt, messageText, userName, ...restProps} = props;
  const classes = classNames('', {
    roleAt,
  });
  return (
    <BubbleContent className={classes}>
      <div className="im">
        <Image
          height={36}
          width={36}
          borderRadius={36}
          imUrl={imUrl}
          {...restProps}
        />
      </div>
      <div className="mess">
        <p className="name">{userName}</p>
        <div className="msgbox">{messageText}</div>
      </div>
    </BubbleContent>
  );
};

Bubble.defaultProps = {
  roleAt: false,
};
export default Bubble;
