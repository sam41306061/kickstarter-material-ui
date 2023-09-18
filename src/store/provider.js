import {createAsyncTunk,createSlice} from '@reduxjs/toolkit';

const initalProviderState = {
    connection: null,
    chainId: null,
    account: null,
    balance: null
}


const providerSlice = createSlice({
    name: 'provider',
    initalState: initalProviderState,
    reducers:{
        providerLoaded(state,action) {
            state.connection = action.payload.connection;
         },
         networkLoaded(state,action) {
            state.chainId = action.payload.chainId;
         },
         accountLoaded(state,action) {
            state.account = action.payload.account;
         },
         etheresBalanceLoaded(state,action) {
            state.balance = action.payload.balance;
         }
    },
});

export const providerActions = providerSlice.actions;

export default providerSlice.reducer;
