import { RootState } from '../store';

export const selectAccessToken = (state: RootState) => state.auth.token;

export const selectAuthenticated = (state: RootState) => !!selectAccessToken(state);
