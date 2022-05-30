import { FireUser } from './authReducer';
// import { User } from '@firebase/auth-types';

import { Auth, User } from './authReducer';

export const loginSuccess = (user: FireUser) => ({
  type: 'auth/login/success',
  payload: user,
});

export const loginError = (error: unknown) => ({
  type: 'auth/login/error',
  payload: error,
});
