import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  InputLogin: [],
  isLoading: false,
  InputRegister: [],
};

const AuthHook = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setLoginData(state) {
      state.isLoading = false;
    },
    setLogin(state, action) {
      state.isLoading = true;
      const newData = action.payload;
      state.InputLogin.push({
        email: newData.email,
        password: newData.password,
      });
    },
    setRegisterData(state) {},
    setRegister(state, action) {
      state.isLoading = true;
      const newData = action.payload;
      state.InputRegister.push({
        fullname: newData.fullname, 
        phonenumber: newData.phonenumber,
        email: newData.email,
        password: newData.password,
      });
    },
  },
});

export const { setLoginData, setLogin,setRegisterData,setRegister } = AuthHook.actions;

export default AuthHook.reducer;
