import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "", price: ""};

const counterSlice = createSlice({
  name: "serviceAdd",
  initialState,
  reducers: {
    changeServiceField(state, action) {
      const { name, value } = action.payload
      return {...state, [name]: value}
    },
    clearServiceFields(state, action) {
      return initialState
    },
    edit(state, action) {
      const { id, name, price } = action.payload;
      return { ...state, id, name, price };
    }
  }
})

export const { changeServiceField, clearServiceFields, edit } = counterSlice.actions
export default counterSlice.reducer