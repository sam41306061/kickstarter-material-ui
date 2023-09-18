import { configureStore } from "@reduxjs/toolkit";

// import vareious reducers
import providerReducer from "./provider";

const store = configureStore({
    reducer:{
        provider: providerReducer,
    }
});

export default store;
