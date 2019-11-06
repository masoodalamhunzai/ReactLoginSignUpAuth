/**
 *
 * Home
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Wrapper from './styles';

export function Home(props) {
  const { user, token } =
    props.location && props.location.payload && props.location.payload.userInfo
      ? props.location.payload.userInfo
      : '';
  return (
    <Wrapper>
      <div className="user-info">
        <h4>Username: {user && user.username}</h4>
        <h4>Token: {token && token}</h4>
      </div>
    </Wrapper>
  );
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Home);
