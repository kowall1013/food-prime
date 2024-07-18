//Redux
import { createSlice } from "@reduxjs/toolkit";

interface SettingsState {
  isMenuOpen: boolean;
}

const initialState: SettingsState = {
  isMenuOpen: false,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = settingsSlice.actions;

export default settingsSlice.reducer;
