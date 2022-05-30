import React, { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import '../config/firebaseConfig';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { selectAuthenticated } from '../redux/auth/authSelectors';
import { Navigate } from 'react-router';
import { login } from '../redux/auth/authThunk';
import { firebaseApp } from '../config/firebaseConfig';

const uiConfig = {
  signInFlow: 'popup',
  // signInSuccessUrl: '/files',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

const SignInScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const authenticated = useAppSelector(selectAuthenticated);

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    const unregisterAuthObserver = onAuthStateChanged(auth, (user) => {
      const curUser = {
        name: user?.displayName,
        email: user?.email,
        token: user?.refreshToken,
      };
      if (user) {
        dispatch(login(curUser));
      }
    });
    return () => unregisterAuthObserver();
  });

  if (!authenticated) {
    return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />;
  }

  return <Navigate to="/files" />;
};

export default SignInScreen;
