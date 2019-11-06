/**
 *
 * Login
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Redirect } from 'react-router-dom';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
import LoginWrapper from './styles';
import Logo from '../../images/logo/logo.png';
import { Button } from '../../components/button/Button';
import Input from '../../components/input/index';
import Twitter from '../../images/icons/_icon/twitter-icon.png';
import Instagram from '../../images/icons/_icon/instagram-icon.png';
import Youtube from '../../images/icons/_icon/youtube-icon.png';
import Tumbler from '../../images/icons/_icon/tumblr-icon.png';
import * as a from './actions';

export function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (username && password !== '') {
      const payload = {
        username: username,
        password: password,
      };
      props.userLogin(payload);
    } else {
      setErrorMsg('Please fill the fields');
    }
  };

  const handleChange = e => {
    const input = e.target.name;
    if (input === 'username') {
      setUsername(e.target.value);
    } else if (input === 'password') {
      setPassword(e.target.value);
    }
  };

  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });
  const {
    login: { response, loggedInInfo },
  } = props;
  return (
    <LoginWrapper>
      <img
        src={Logo}
        alt=""
        width="40%"
        style={{ display: 'block', margin: '10px auto' }}
      />
      <h5 className="loginDiscription">
        connect with investors <br />
        upload content <br />
        sell subscriptions & content <br />
        make tons of money
      </h5>
      <center>
        <Link to="/signup">
          {' '}
          <Button rounded btnText="sign up" />
        </Link>
      </center>
      <p className="loginDiscription">OR</p>
      {errorMsg && errorMsg != '' ? (
        <h5 style={{ color: 'red' }}>{errorMsg}</h5>
      ) : (
        ''
      )}
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          placeholder="user name"
          name="username"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />

        {response && response.status !== 200 && <div>{response.message}</div>}
        {response && response.status === 200 && (
          <Redirect
            to={{
              pathname: '/home',
              payload: { userInfo: loggedInInfo },
            }}
          />
        )}
        <center>
          <Button rounded btnText="login" />
        </center>
      </form>
      <h5 className="loginDiscription">forgot password?</h5>
      <div className="loginFooter">
        <Button btnText="why us?" />
        <img src={Twitter} alt="twitter" width="40px" />
        <img src={Instagram} alt="instagram" width="40px" />
        <img src={Youtube} alt="youtube" width="40px" />
        <img src={Tumbler} alt="tumbler" width="40px" />
        <Button btnText="login" />
      </div>
    </LoginWrapper>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userLogin: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    userLogin: payload => dispatch(a.userLogin(payload)),
    setResponse: payload => dispatch(a.setResponse(payload)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Login);
