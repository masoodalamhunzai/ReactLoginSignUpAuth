import styled from 'styled-components';

const RegistrationWrapper = styled.div`
  position: relative;
  border: 1px solid grey;
  width: 40%;
  margin: auto;
  background-image: linear-gradient(#3b83c3, #0c3f6c);
  text-align: center;
  width: 40%;
  h5 {
    color: #fefafa;
    margin: 0;
    padding-bottom: 5rem;
  }
  p {
    color: #fefafa;
    text-transform: capitalize;
    margin: 0;
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
  span {
    color: #67b7ff;
  }
  .signup-footer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 150px;
  }
`;

export default RegistrationWrapper;
