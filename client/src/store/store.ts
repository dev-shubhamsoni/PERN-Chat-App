import { configureStore } from "@reduxjs/toolkit";
import loginReducer, { LoginState } from "../redux/LoginSlice"; // Assuming you have LoginState defined in LoginSlice
import registrationReducer, { RegistrationState } from "../redux/RegistrationSlice"; // Assuming you have RegistrationState defined in RegistrationSlice

// Define the RootState type by combining the state types of all reducers
export interface RootState {
  loginData: LoginState;
  registerData: RegistrationState;
}

// Create the Redux store
export const store = configureStore({
  reducer: {
    loginData: loginReducer,
    registerData: registrationReducer,
  },
});
