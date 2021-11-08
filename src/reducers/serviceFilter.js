import { createSlice } from "@reduxjs/toolkit";

const initialState =  "";

const counterSlice = createSlice({
  name: "serviceFilter",
  initialState,
  reducers: {
      filter(state, action) {
        const value = action.payload
        return value;
      }
  }
})

export const { filter } = counterSlice.actions
export default counterSlice.reducer