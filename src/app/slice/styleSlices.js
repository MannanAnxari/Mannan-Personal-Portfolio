import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
};

const styleSlice = createSlice({
  name: "styles",
  initialState,
  reducers: {
    setTheme: (state, { payload }) => {
      state.mode = payload;
    },
  },
});

export const { setTheme } = styleSlice.actions;
export default styleSlice.reducer;
