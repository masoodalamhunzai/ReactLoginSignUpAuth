import styled from 'styled-components';

const LoginWrapper = styled.div`
  border: 1px solid grey;
  display: flex;
  width: 40%;
  background-image: linear-gradient(#3b83c3, #0c3f6c);
  flex-direction: column;
  padding: 50px 20px;
  margin: 10px auto;
  .loginDiscription {
    align-items: center;
    color: white;
    text-align: center;
    font-size: 1.8rem;
    font-family: "'Arvo', serif";
    text-transform: capitalize;
    font-weight: bolder;
    letter-spacing: -0.9px;
    margin: 20px 0 5px 0;
  }
  .loginFooter {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 150px;
  }
  .signup-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    input {
      width: 70%;
      margin: 0.4rem auto;
      height: 2rem;
    }
  }
  h5 {
    color: #fff3f3;
    text-align: center;
  }
`;
export default LoginWrapper;
