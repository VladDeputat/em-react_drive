import { AnyAction } from 'redux';

export interface FireUser {
  name: string | null | undefined;
  email: string | null | undefined;
  token: string | null | undefined;
}

export interface User {
  name: string | null;
  email: string | null;
}

export interface Auth {
  token: string | null;
  user: User | null;
}

const initState: Auth = {
  token: null,
  user: null,
};

const auth = (state = initState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case 'auth/login/success': {
      const { name, email, token } = payload;

      const user = {
        ...state.user,
        email,
        name,
      };

      return {
        ...state,
        token,
        user,
      };
    }

    default:
      return state;
  }
};

export default auth;
