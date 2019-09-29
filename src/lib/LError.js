import React from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";

const TextError = styled.div`
  font-size: 12px;
  font-weight:400;
  color:rgba(255,82,82,1);
  line-height:17px;
  margin-top: 5px;
`;

const LError = ({ text }) => (
  <TextError>{text}</TextError>
);

LError.propTypes = {
  text: PropTypes.string,
};


export default LError;
