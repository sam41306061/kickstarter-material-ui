import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from './accounts';

const store = configureStore({
  reducer: {
    accounts: accountsReducer
  },
  middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware({
     serializableCheck: false,
   }),
});


export default store;
