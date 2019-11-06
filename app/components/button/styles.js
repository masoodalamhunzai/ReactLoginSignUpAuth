import styled from 'styled-components';

export const Wrapper = styled.div`
  .button {
    background: #1d598d;
    border: none;
    padding: 10px 20px;
    color: white;
    text-transform: capitalize;
    border-radius: ${props => (props.rounded ? '25px' : '5px')};
    cursor: pointer;
    margin: 5px;
    font-family: ${props => (props.arvo ? "'Arvo', serif" : '')};
    text-align: center;
  }
`;
