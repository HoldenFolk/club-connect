import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  authToken: '',
};

export const globalStatusSlice = createSlice({
  name: 'globalStatus',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isScanning = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isConnecting = action.payload;
    },
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
  },
});

// Selectors
export const getIsLoggedIn = (state) => state.globalStatus.isLoggedIn;
export const getIsLoading = (state) => state.globalStatus.isConnecting;
export const getAuthToken = (state) => state.globalStatus.authToken;

export const { setIsLoggedIn, setIsLoading, authToken } =
  globalStatusSlice.actions;

export default globalStatusSlice.reducer;
