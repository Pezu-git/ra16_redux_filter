import { configureStore } from "@reduxjs/toolkit";
import serviceAdd from "../reducers/serviceAdd";
import serviceFilter from "../reducers/serviceFilter";
import serviceList from "../reducers/serviceList";


const store = configureStore({
  reducer: {
    serviceList,
    serviceAdd,
    serviceFilter
  }
})

export default store