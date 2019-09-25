import React from "react";
import styled from 'styled-components';

const InputLabel = styled.label`
  font-size: 14px;
  color: rgba(51,51,51,1);
  font-weight: 500;
  display: block;
  margin-bottom: 5px;
`;

const Llable = ({ text, htmlFor }) => (
    <InputLabel for={htmlFor}>{text}</InputLabel>
);

export default Llable;
