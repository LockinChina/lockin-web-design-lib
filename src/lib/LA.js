/**
 * A link to a certain page, an anchor tag
 */

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const LA = styled.a`
  color: #999;
  cursor: pointer;
  text-decoration: none;
  ${props =>
    props.isSelect &&
    css`
      color: rgba(0, 0, 153, 1);
      text-decoration: underline;
    `}

  &:hover {
    text-decoration: underline;
    color: rgba(0, 0, 153, 1);
  }

  &:active {
    text-decoration: underline;
    color: rgba(0, 0, 153, 1);
  }
`;

LA.propTypes = {
  isSelect: PropTypes.bool,
};

export default LA;
