/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
// import './toast.css';
import styled from 'styled-components';

const ToastContainer = styled.div`
  position: fixed;
  z-index: 10000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    background: rgba(0, 0, 0, 0.6);
    padding: 10px 20px;
    color: #fff;
    line-height: 30px;
    min-width: 100px;
    text-align: center;
    border-radius: 5px;
    display: inline-block;
    max-width: 80%;
  }
`;


export default {
  dom: null as unknown as HTMLElement,
  info(msg: string, count:number = 1) {
    this.dom = document.createElement('div');
    const JSXdom = (
      <ToastContainer>
        <p>{msg}</p>
      </ToastContainer>
    );
    // JSX代码
    ReactDOM.render(JSXdom, this.dom);
    document.body.appendChild(this.dom);
    const _this = this;
    setTimeout(() => {
      _this.dom && _this.dom.remove();
    }, count * 1000);
  },
};
