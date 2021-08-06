/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useRef, MutableRefObject, useEffect} from 'react';
import styled from 'styled-components';
import {Transition, AnimateProps} from '../Transition/transition';
import Button from '../Button';
import GlobalStyle from '../globalStyle';
const ModalContent = styled.div`
  position: fixed;
  top: 0; 
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  .mask {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 99;
  }
  .modal-content {
    position: relative;
    z-index: 100;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    .closeBtn {
      position: absolute;
      top: -10px;
      cursor: pointer;
      right: -10px;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: rgb(244, 244, 244);
      box-shadow: rgb(255 255 255) 0px 0px 0px 6px;
      &::before {
        position: absolute;
        left: 9px;
        top: 6px;
        content: '×';
        display: inline-block;
        font-size: 28px;
        font-weight: bold;
        color: #3c64b1;
        opacity: 0.8;
      }
      &:hover::before {
        opacity: 1;
      }
    }
  }
  .buttons {
    width: 100%;
    text-align: center;
    button {
      margin: 15px 10px 0;
      /* &:nth-child(2) {
        background-color: #3c64b1;
        color: #fff;
      } */
    }
  }
`;

export interface ModalProps {
  visible?: boolean;
  closeBtnClick?: () => void;
  width?: number;
  height?: number;
  hideCloseBtn?: boolean;
  opcity?: number;
  className?: string;
  buttons?: string[];
  transition?: AnimateProps;
  buttonClick?: (index: number) => void;
}

const timer = null;

export const Modal: React.FC<ModalProps> = (props) => {
  const {
    children,
    visible,
    width,
    height,
    hideCloseBtn,
    opcity,
    className,
    buttons,
    transition,
    closeBtnClick,
    buttonClick,
  } = props;
  const inputEl: MutableRefObject<any> = useRef(null);
  useEffect(() => {
    if (visible === false) {
      if (inputEl.current !== null) {
        inputEl.current.style.display = 'none';
      }
      // setTimeout(() => {
      //   if (inputEl.current !== null) {
      //     inputEl.current.style.display = 'none';
      //   }
      // }, 200);
    } else if (inputEl.current !== null) inputEl.current.style.display = 'flex';
  }, [visible]);

  const setButtonType = (index: number) => {
    if (index === 0) return 'light';
  };
  return (
    <>
      <ModalContent ref={inputEl} className={className}>
        {visible && (
          <div
            className="mask"
            style={{backgroundColor: `rgba(0, 0, 0, ${opcity})`}}
          />
        )}
        <Transition
          addEndListener={() => {}}
          in={visible}
          timeout={300}
          transition={transition}
        >
          <div
            className="modal-content"
            style={{width: `${width}px`, height: `${height}px`}}
          >
            {!hideCloseBtn && (
              <div
                role="button"
                className="closeBtn"
                onClick={closeBtnClick}
                tabIndex={0}
                onKeyDown={closeBtnClick}
              />
            )}
            {children}
            <div className="buttons">
              {buttons &&
              buttons.length > 0 &&
              buttons.map((item, index) => (
                <Button
                  buttonType={setButtonType(index)}
                  key={item}
                  onClick={() => {
                    if (buttonClick) {
                      buttonClick(index);
                    }
                  }}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        </Transition>
      </ModalContent>
      <GlobalStyle />
    </>
  );
};

Modal.defaultProps = {
  opcity: 0.3,
  buttons: [],
  transition: 'zoomIn',
};
