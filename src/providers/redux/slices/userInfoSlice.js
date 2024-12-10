import { createSlice } from '@reduxjs/toolkit';

// TODO: Implement?
const initialState = {
  username: '',
  isLoading: false,
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
  },
});

// Selectors
export const getIsLoggedIn = (state) => state.globalStatus.isLoggedIn;
export const getIsLoading = (state) => state.globalStatus.isConnecting;

export const { setIsLoggedIn, setIsLoading } = globalStatusSlice.actions;

export default globalStatusSlice.reducer;
