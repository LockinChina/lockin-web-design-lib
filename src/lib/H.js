import React from "react";
import styled, {css} from 'styled-components';

const BasicStyle = css`
  margin: 0;
  padding: 0;
  font-weight: ${props => (props.bold ? '600' : '400')};
  color: #333;
`;

const H1 = styled.h1`
  ${BasicStyle};
  font-size: 36px;
  line-height: 50px;
`;

const H2 = styled.h2`
  ${BasicStyle};
  font-size:30px;
  line-height: 42px;
`;

const H3 = styled.h3`
  ${BasicStyle};
  font-size: 24px;
  line-height: 33px;
`;

const H4 = styled.h4`
  ${BasicStyle};
  font-size: 20px;
  line-height: 28px;
`;

const H5 = styled.h5`
  ${BasicStyle};
  font-size: 20px;
  line-height: 28px;
`;

const H6 = styled.h6`
  ${BasicStyle};
  font-size: 16px;
  line-height: 22px;
`;

export {H1, H2, H3, H4, H5, H6};
