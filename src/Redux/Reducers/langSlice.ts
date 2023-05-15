import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ILangState {
  lang: string;
}

const initialState: ILangState = {
  lang: `en`,
};

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLang(state, action: PayloadAction<ILangState>) {
      state.lang = action.payload.lang;
    },
  },
});

export const { setLang } = langSlice.actions;
export default langSlice.reducer;
