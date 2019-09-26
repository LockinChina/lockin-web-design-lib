/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';

const LA = styled.a`
  color: #999;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: rgba(0, 0, 153, 1);
  }

  &:active {
    text-decoration: underline;
    color: rgba(0, 0, 153, 1);
  }
`;

export default LA;
