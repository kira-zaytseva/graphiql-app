import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IUserState {
  email: string;
  refreshToken: string;
  id: string;
}

const initialState: IUserState = {
  email: '',
  refreshToken: '',
  id: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUserState>) {
      state.email = action.payload.email;
      state.refreshToken = action.payload.refreshToken;
      state.id = action.payload.id;
    },
    delUser(state) {
      state.email = ``;
      state.refreshToken = '';
      state.id = '';
    },
  },
});

export const { setUser, delUser } = userSlice.actions;
export default userSlice.reducer;
