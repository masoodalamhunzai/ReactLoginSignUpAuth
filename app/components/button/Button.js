import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

export const Button = props => {
  return (
    <Wrapper rounded={props.rounded} arvo={props.arvo}>
      <button className="button bg">{props.btnText}</button>
    </Wrapper>
  );
};

Button.propTypes = {
  rounded: PropTypes.bool,
  arvo: PropTypes.bool,
  btnText: PropTypes.string,
};
