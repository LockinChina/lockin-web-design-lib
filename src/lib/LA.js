/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';

const LA = styled.a`
  color: rgba(0,0,153,1);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
  
  &:active{
   text-decoration: underline;
  }
`;

export default LA;
