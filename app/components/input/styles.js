import styled from 'styled-components';

const Wrapper = styled.div`
  label {
    display: flex;
    justify-content: space-between;
    padding: 1%;
  }
  input {
    border-style: none;
    border-bottom-style: double;
    border-color: #fffafa;
    background: transparent;
    font-size: 16px;
    margin: auto;
    display: block;
    width: 54%;
    padding: 10px;
    color: white;
    font-family: 'Arvo', serif;
  }
  input:focus {
    outline: none;
  }
`;

export default Wrapper;
