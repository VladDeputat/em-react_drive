import React from 'react';
import styled from 'styled-components';
import SignInScreen from '../components/SignInScreen';

const SignInWindow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
`;

const SignInContainer = styled.div`
  padding: 40px;
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 1px 7px 13px 7px rgba(96, 96, 96, 0.46);
`;

const SigninText = styled.p`
  font-size: 30px;
  font-weight: 700;
`;

const LoginPage: React.FC = () => {
  return (
    <SignInWindow>
      <SignInContainer>
        <SigninText>Please, sign in.</SigninText>
        <SignInScreen />
      </SignInContainer>
    </SignInWindow>
  );
};

export default LoginPage;
