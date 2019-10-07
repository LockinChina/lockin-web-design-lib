import React from 'react';
import styled from 'styled-components';

const StepsConatiner = styled.div`
  position: fixed;
  cursor: pointer;
  right: 20px;
  bottom: 100px;
  z-index: 99999;
  font-family: lockinu;
  border-radius: 50%;
  width: 58px;
  height: 58px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
`;

function Steps() {
  return <StepsConatiner />;
}

export default Steps;
