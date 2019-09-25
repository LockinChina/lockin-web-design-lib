import React from "react";
import styled, { css } from 'styled-components';
import Button from './Button';
import './common.css';

const ModalBg = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
`;


function getWindowHeight() {
    let windowHeight = 0;
    if (document.compatMode === "CSS1Compat") {
        windowHeight = document.documentElement.clientHeight;
    } else {
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}

const Modal = ({ visible, type = 1, okText, onOk, cancelText, onCancel, title, detail, contentText, contentNode, btnStyle = 1 }) => {
    console.log('getWindowHeight', getWindowHeight());
    return (
        <ModalBg style={{ display: visible ? 'block' : 'none'}}>
            {type === 1 && (
                <div class={'modal-content'}>
                    <div>{contentNode}</div>
                    <Button onClick={() => onOk()}>按钮</Button>
                </div>
            )}

            {
                type === 2 && (
                    <div className={'modal-title-content'}>
                        <div>
                            <div>{title}</div>
                            <div>&times;</div>
                        </div>

                        <div>{contentNode}</div>
                        {
                            btnStyle === 1 ? (
                                <div style={{ textAlign: 'right' }}>
                                    <Button type={2} onClick={() => onOk()}>{cancelText}</Button>
                                    <Button style={{ marginLeft: 10 }} onClick={() => onOk()}>{okText}</Button>
                                </div>
                            ) : (
                                <div style={{ textAlign: 'right' }}>
                                    <Button type={4} onClick={() => onOk()}>{cancelText}</Button>
                                    <Button type={2} style={{ marginLeft: 10 }} onClick={() => onOk()}>{okText}</Button>
                                </div>
                            )
                        }
                    </div>
                )
            }

            {type === 3 && (
                <div className={'modal-node-content'}>
                    <div>
                        <div>{title}</div>
                        <div>&times;</div>
                    </div>

                    <div>{contentNode}</div>
                    {
                        btnStyle === 1 ? (
                            <div style={{ textAlign: 'right', marginTop: 10 }}>
                                <Button type={2} onClick={() => onOk()}>{cancelText}</Button>
                                <Button style={{ marginLeft: 10 }} onClick={() => onOk()}>{okText}</Button>
                            </div>
                        ) : (
                            <div style={{ textAlign: 'right', marginTop: 10 }}>
                                <Button type={4} onClick={() => onOk()}>{cancelText}</Button>
                                <Button type={2} style={{ marginLeft: 10 }} onClick={() => onOk()}>{okText}</Button>
                            </div>
                        )
                    }
                </div>)}
        </ModalBg>);
};

export default Modal;
