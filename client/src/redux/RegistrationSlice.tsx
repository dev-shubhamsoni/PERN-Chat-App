import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RegistrationState {
  register: RegisterData; 
}

const initialState: RegistrationState = {
  register: {
    name: '',
    email: '',
    userName: '',
    password: '',
  },
};

export interface RegisterData {
  name: string;
  email: string;
  userName: string;
  password: string;
}

const registrationSlice = createSlice({
  name: "RegistrationSlice",
  initialState,
  reducers: {
    getRegistrationData: (state, action: PayloadAction<RegisterData>) => {
      return {
        ...state,
        register: {
          ...state.register,
          name: action.payload.name,
          email: action.payload.email,
          userName: action.payload.userName,
          password: action.payload.password,
        },
      };
    },
  },
});

export const { getRegistrationData } = registrationSlice.actions;
export default registrationSlice.reducer;
