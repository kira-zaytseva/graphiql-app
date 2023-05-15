import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IUserState {
  email: string;
  token?: string;
  id?: string;
}

const initialState: IUserState = {
  // email: 'mail@mail,com',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUserState>) {
      state = action.payload;
    },
    delUser(state) {
      state.email = ``;
    },
  },
});

export const { setUser, delUser } = userSlice.actions;
export default userSlice.reducer;
