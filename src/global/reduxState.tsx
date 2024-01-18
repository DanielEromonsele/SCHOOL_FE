import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "" || null,
  toggle: false,
  toggleMenu: false,
  memberToggle: false,
  toggleText: false,
};

const reduxState = createSlice({
  name: "schoolProject",
  initialState,
  reducers: {
    loginState: (state: any, { payload }) => {
      state.user = payload;
    },
    logoutState: (state) => {
      state.user = null;
    },
  },
});

export const { loginState, logoutState } = reduxState.actions;

export default reduxState.reducer;
