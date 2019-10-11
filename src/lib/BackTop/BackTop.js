/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BackTopContainer = styled.button`
  position: fixed;
  display: block;
  cursor: pointer;
  right: 20px;
  bottom: 100px;
  z-index: 999;
  font-family: lockinu;
  border-radius: 50%;
  width: 58px;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255,255,255,1);
  box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.25);
  :hover{
    box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.4);
  }
  :active{
    outline: none;
    border: none;
  }
  span{
    color: #4784F8;
    font-size: 26px;
  }
`

function BackTop(props) {
  const [isShow, setIsShow] = useState(false);
  const handelScroll = () => {
    let scroll = document.documentElement.scrollTop;
    if (scroll > 200) {
      setIsShow(true)
    }
    else {
      setIsShow(false)
    }
  }
  function goTo() {
    let scrollToTop = window.setInterval(function () {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20);
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 2);
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      handelScroll();
    })
  }, [isShow])

  return (
    isShow
      ?
      <BackTopContainer
        className="fadeAnim" onClick={() => {
          goTo();
        }}>
        <span className="icon icontop"></span>
      </BackTopContainer>
      :
      null
  )

}

export default BackTop;