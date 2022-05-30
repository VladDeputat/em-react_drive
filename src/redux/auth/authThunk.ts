import { AppThunk } from './../store';
// import { User } from '@firebase/auth-types';
import { loginSuccess, loginError } from './authActions';
import { Auth, FireUser } from './authReducer';
// import { User } from './authReducer';

export const login =
  (firebaseUser: FireUser): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(loginSuccess(firebaseUser));
    } catch (error) {
      dispatch(loginError(error));
    }
  };
