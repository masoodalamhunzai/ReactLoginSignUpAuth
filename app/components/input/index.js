import React from 'react';
import Wrapper from './styles';
const Input = props => {
  return (
    <Wrapper>
      <label>
        <input type="text" name="name" placeholder={props.placeholder} />
      </label>
    </Wrapper>
  );
};
export default Input;
