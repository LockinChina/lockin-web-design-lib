import styled from 'styled-components';

const BreadcrumbContent = styled.div`
  font-size: 14px;
  color: #555;
  display: flex;
  flex-direction: row;
  align-items: center;
  span {
    display: inline-block;
    color: #777;
    &::after {
      display: inline;
      content: '/';
      margin: 0 10px;
      color: #999;
    }
    &:last-child::after {
      content: '';
      margin: 0 0px;
    }
  }
  a {
    color: #555;
    text-decoration: none;
    :hover {
      color: #0d6efd;
    }
  }
`;

export default BreadcrumbContent;
