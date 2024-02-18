import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface LoginState {
  name: string;
  password: string;
}

const initialState: { login: LoginState } = {
  login: {
    name: "",
    password: "",
  },
};

const loginSlice = createSlice({
  name: "LoginSlice",
  initialState,
  reducers: {
    getLoginData: (state, action: PayloadAction<LoginState>) => {
      return {
        ...state,
        login: {
          ...state.login,
          name: action.payload.name,
          password: action.payload.password,
        },
      };
    },
  },
});

// Export the action creators and reducer
export const { getLoginData } = loginSlice.actions;
export default loginSlice.reducer;
