import styled from 'styled-components';

const LabelContent = styled.span`
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #fff;
  &.default {
    font-size: 14px;
    color: #333;
    padding: 4px 8px;
  }
  &.small{
    font-size: 12px;
    padding: 2px 8px;
  }
  &.checked{
    border-color: #0d6efd;
    color: #0d6efd;
  }
  &.large{
    font-size: 14px;
    padding: 6px 10px;
  }
  &.hover{
    cursor: pointer;
  }
  &.disabled{
    opacity: .3;
    cursor: default;
  }
  &.disabled.hover{
    cursor: default !important;
  }
`;

export default LabelContent;
// border: 1px solid #0d6efd;
