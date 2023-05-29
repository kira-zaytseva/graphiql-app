import { createContext } from 'react';

export type UserVerified = {
  isAuth: boolean;
  email: string;
  action?: string;
};

export const defaultContext: UserVerified = { isAuth: false, email: '', action: 'SignIn' };

const Context = createContext(defaultContext);

export default Context;
