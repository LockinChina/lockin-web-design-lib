import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button/Button';

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 200;
`;

const ModalNodeContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${props => (props.width ? `${props.width}px` : '470px')};
  margin-left: ${props => (props.width ? `${-(props.width / 2)}px` : '-235px')};
  max-height: ${Number(getWindowHeight() * 0.8).toFixed()}px;
  overflow-y: auto;
  margin-top: -${Number(getWindowHeight() * 0.8).toFixed() / 2}px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  padding: 20px 20px 10px;
  & > div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  & > div:first-child > div:first-child {
    font-size: 18px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 22px;
  }

  & > div:first-child > div:last-child {
    font-size: 18px;
    color: rgba(102, 102, 102, 1);
    cursor: pointer;
  }
`;

function getWindowHeight() {
  let windowHeight = 0;
  if (document.compatMode === 'CSS1Compat') {
    windowHeight = document.documentElement.clientHeight;
  } else {
    windowHeight = document.body.clientHeight;
  }
  return windowHeight;
}

const Modal = ({
  width,
  visible,
  type = 1,
  okText = '确定',
  onOk,
  cancelText = '取消',
  onCancel,
  title,
  contentNode,
  btnStyle = 1,
  isHaveButton = true,
}) => (
  <ModalBg style={{ display: visible ? 'block' : 'none' }}>
    {type === 1 && (
      <div className="modal-content">
        <div>{contentNode}</div>
        <Button solid onClick={() => onOk()}>
          {okText}
        </Button>
      </div>
    )}
    {type === 2 && (
      <div className="modal-title-content">
        <div>
          <div>{title}</div>
          <div role="button" tabIndex="0" onClick={() => onCancel()}>
            &times;
          </div>
        </div>

        <div>{contentNode}</div>
        {isHaveButton && (
          <div>
            {btnStyle === 1 ? (
              <div style={{ textAlign: 'right' }}>
                <Button hollow type={2} onClick={() => onCancel()}>
                  {cancelText}
                </Button>
                <Button solid style={{ marginLeft: 10 }} onClick={() => onOk()}>
                  {okText}
                </Button>
              </div>
            ) : (
              <div style={{ textAlign: 'right' }}>
                <Button type={4} onClick={() => onCancel()}>
                  {cancelText}
                </Button>
                <Button
                  hollow
                  type={2}
                  style={{ marginLeft: 10 }}
                  onClick={() => onOk()}
                >
                  {okText}
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    )}
    {type === 3 && (
      <ModalNodeContent width={width}>
        <div>
          <div>{title}</div>
          <div role="button" tabIndex="0" onClick={onCancel}>
            &times;
          </div>
        </div>

        <div>{contentNode}</div>
        {isHaveButton && (
          <div>
            {btnStyle === 1 ? (
              <div style={{ textAlign: 'right', marginTop: 10 }}>
                <Button type={2} onClick={() => onCancel()}>
                  {cancelText}
                </Button>
                <Button
                  hollow
                  style={{ marginLeft: 10 }}
                  onClick={() => onOk()}
                >
                  {okText}
                </Button>
              </div>
            ) : (
              <div style={{ textAlign: 'right', marginTop: 10 }}>
                <Button hollow type={4} onClick={() => onCancel()}>
                  {cancelText}
                </Button>
                <Button
                  solid
                  type={2}
                  style={{ marginLeft: 10 }}
                  onClick={() => onOk()}
                >
                  {okText}
                </Button>
              </div>
            )}
          </div>
        )}
      </ModalNodeContent>
    )}
  </ModalBg>
);

Modal.propTypes = {
  width: PropTypes.number,
  visible: PropTypes.bool,
  type: PropTypes.number,
  okText: PropTypes.string,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  cancelText: PropTypes.string,
  title: PropTypes.string,
  contentNode: PropTypes.node,
  btnStyle: PropTypes.number,
  isHaveButton: PropTypes.bool,
};

export default Modal;
