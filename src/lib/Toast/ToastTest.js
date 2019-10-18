/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-alert */

import React, { useState, useEffect } from 'react';
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
let timer = null;
export default function Toast(props) {
  const { msg, count } = props;
  const [m, setM] = useState('' || msg);
  const box = (
    <ToastContainer>
      {m && (
        <p>
          {/* className={`animated ${m === '' ? 'fadeOutUp' : 'fadeInDown'}`} */}
          {m}
        </p>
      )}
    </ToastContainer>
  );
  useEffect(() => {
    setM(msg);
    setTimeout(timer);
    timer = setTimeout(() => {
      setM('');
    }, count * 1000);
  }, []);

  return box;
}

Toast.defaultProps = {
  count: 3,
};
