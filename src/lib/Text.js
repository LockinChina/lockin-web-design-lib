import styled, { css } from 'styled-components';
import React, { Children } from 'react';

function TextStyle(props) {
    let lineHeight = '22px';
    if (props.size === 14) {
        lineHeight = '20px';
    } else if (props.size === 12) {
        lineHeight = '18px';
    }

    let DivBasicStyle = styled.div`
      font-weight: 400;
      color: #333;
      font-size: ${props => (props.size ? `${props.size}px` : '16px')};
      line-height: ${props => (props.lineHeight)};
    `;

    return (<DivBasicStyle size={props.size} lineHeight={lineHeight}>
        {Children.toArray(props.children)}
    </DivBasicStyle>);
};

export default TextStyle;