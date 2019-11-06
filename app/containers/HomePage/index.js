/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Button } from '../../components/button/Button';
import Wrapper from './styles';
import { Link } from 'react-router-dom';
export default function HomePage() {
  return (
    <Wrapper>
      <div className="homepage-btn">
        <Link to="/login">
          <Button btnText="signIn" />
        </Link>
        <Link to="/signup">
          <Button btnText="signUp" />
        </Link>
      </div>
    </Wrapper>
  );
}
