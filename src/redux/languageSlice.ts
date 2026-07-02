import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lang: localStorage.getItem('language') || 'en',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.lang = action.payload;
      localStorage.setItem('language', action.payload);
    },
    toggleLanguage: (state) => {
      state.lang = state.lang === 'en' ? 'fa' : 'en';
      localStorage.setItem('language', state.lang);
    },
  },
});

export const { setLanguage, toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
