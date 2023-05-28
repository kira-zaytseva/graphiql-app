import { useContext } from 'react';
import { GqlContext, InitialContext } from '../context/gqlContext';

export const useFilmsQuery = () => useContext(GqlContext) as InitialContext;
