import { createContext } from 'react';

export type UserVerified = {
  isAuth: boolean;
  email: string;
};

export const defaultContext: UserVerified = { isAuth: false, email: '' };

const Context = createContext(defaultContext);

export default Context;
