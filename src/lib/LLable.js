import React from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";

const InputLabel = styled.label`
  font-size: 14px;
  color: rgba(51,51,51,1);
  font-weight: 500;
  display: block;
  margin-bottom: 5px;
`;

const LLable = ({ text, htmlFor }) => (
  <InputLabel for={htmlFor}>{text}</InputLabel>
);

LLable.propTypes = {
  text: PropTypes.string,
  htmlFor: PropTypes.string,
};

export default LLable;
