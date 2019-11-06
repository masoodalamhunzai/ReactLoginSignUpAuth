/**
 *
 * SignUp
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSignUp from './selectors';
import reducer from './reducer';
import saga from './saga';
import RegistrationWrapper from './Styles';
import * as a from './actions';
import Logo from '../../images/logo/logo.png';
import Input from '../../components/input';
import { Button } from '../../components/button/Button';
import Verified from '../../images/logo/verified.png';

export function SignUp(props) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (email && username && password !== '') {
      const payload = {
        type: 'entrepreneur',
        email: email,
        username: username,
        password: password,
      };
      props.createUser(payload);
      setEmail('');
      setUsername('');
      setEmail('');
    } else {
      setErrorMsg('Please fill the fields');
    }
  };
  const handleChange = e => {
    const input = e.target.name;
    if (input === 'email') {
      setEmail(e.target.value);
    } else if (input === 'username') {
      setUsername(e.target.value);
    } else if (input === 'password') {
      setPassword(e.target.value);
    }
  };
  useInjectReducer({ key: 'signUp', reducer });
  useInjectSaga({ key: 'signUp', saga });
  const { response, signupInfo } = props.signUp;
  return (
    <div>
      <RegistrationWrapper>
        <img
          src={Logo}
          width="40%"
          style={{ display: 'block', margin: '10px auto' }}
        />
        <h5>Sign Up As An Entrepreneur</h5>
        {errorMsg && errorMsg != '' ? (
          <h5 style={{ color: 'red' }}>{errorMsg}</h5>
        ) : (
          ''
        )}
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
          <input
            type="Password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <p> have an account already?</p>
          <Link to="/login">
            <p>sign in here</p>
          </Link>
          {response && response.status !== 200 && <div>{response.message}</div>}
          {response && response.status === 200 && (
            <Redirect
              to={{
                pathname: '/home',
                payload: { userInfo: signupInfo },
              }}
            />
          )}
          <div className="signup-footer">
            <p>
              <img src={Verified} alt="twitter" width="17rem" />
              Read Our
              <span> Terms & Conditions</span>
            </p>
          </div>
          <Button
            btnText="Access My Wepitch Profile Now"
            onSubmit={handleSubmit}
            type="submit"
          />
        </form>
      </RegistrationWrapper>
    </div>
  );
}

SignUp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  createUser: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  signUp: makeSelectSignUp(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    createUser: payload => dispatch(a.createUser(payload)),
    setResponse: payload => dispatch(a.setResponse(payload)),
    signUpUserInfo: payload => dispatch(a.signUpUserInfo(payload)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SignUp);
