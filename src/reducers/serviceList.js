import { createSlice } from "@reduxjs/toolkit";
import genID from '../utils/genID';

const initialState = [
  { id: `${genID()}`, name: "Диагностика", price: "Бесплатно"},
  { id: `${genID()}`, name: "Замена стекла", price: '21 000'},
  { id: `${genID()}`, name: "Замена дисплея", price: '25 000'},
  { id: `${genID()}`, name: "Замена аккумулятора", price: '4 000'},
  { id: `${genID()}`, name: "Чистка динамика", price: '200'},
];

const counterSlice = createSlice({
  name: "serviceList",
  initialState,
  reducers: {
    add(state, action) {
      if (action.payload.name !== "" && action.payload.price !== "") {
        state.push({ id: genID(), ...action.payload })
      }
      
    },
    remove(state, action) {
      const id = action.payload;
      return state.filter((el) => el.id !== id);
    },
    update(state, action) {
     const { id, name, price } = action.payload
      state.forEach((el) => {
        if (el.id === id) {
          el.name = name
          el.price = price
        }
      })
    },
  }
})

export const { add, remove, update } = counterSlice.actions
export default counterSlice.reducer