import React from 'react';
import styled from 'styled-components';

import loading from '../../static/images/loading.png'

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom:0;
  left: 0;
  z-index: 99999999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: rgba(0, 0, 0, .3); */
  .mask{
    position: absolute;
    top: 0;
    bottom:0;
    left:0;
    right: 0;
  }
  .loadbox{
    position: absolute;
    .load{
      background: url(${loading}) no-repeat;
      margin: 0 auto;
      background-size: 100%;
      width: 50px;
      height: 50px;
      overflow: hidden;
      display: block;
      animation: loading 2s linear infinite ;
      @keyframes loading {
        0%{
          transform: rotate(0deg);
        }
        100%{
          transform: rotate(360deg);
        }
      }
    }
    .loadtext{
      font-size: 18px;
      text-align: center;
      margin-top: 20px;
      
    }
  }
`

function Loading (props) {
  const {transparent, message, opacity} = props;
  return (
    <LoadingContainer>
      {
        !transparent &&
        <div className="mask" style={{ background: opacity ? `rgba(0, 0, 0, ${opacity})` : "rgba(0, 0, 0, .2)"}}></div>
      }
      <div className="loadbox">
        <div className="load"></div>
        <p className="loadtext">{message}</p>
      </div>
      
    </LoadingContainer>
  )
}

export default Loading;