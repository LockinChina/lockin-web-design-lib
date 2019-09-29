import styled, { createGlobalStyle } from 'styled-components';

export const GrayBox = styled.div`
  background: #f9f9f9;
  margin: 20px auto 20px;
  border-radius: 6px;
  max-width: 1000px;
  padding: 20px;
  box-shadow: 0 0 12px 0px rgba(0, 0, 0, .15)
`
export const BtnSpace = styled.div`
  button {
    margin: 10px;
  }
`;

export const Ptit = styled.p`
  font-size: 20px;
  
`;

export const Space = styled.div`
  overflow: hidden;
  height: 20px;
`

export const Table  = styled.table`
  max-width: 1000px;
  thead{
    background: #f7f7f7;
    td{
      border: 1px solid #e9e9e9;
      padding: 8px 16px;
    }
  };
  tbody{
    tr td{
      font-family: Consolas,Menlo,Courier,monospace;
      border:1px solid #e9e9e9;
      padding: 8px 16px;
      font-size: 13px;
    }
  }
  
`