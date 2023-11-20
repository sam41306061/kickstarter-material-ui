import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { ethers } from "ethers";

export const loadProvider = createAsyncThunk(
    'accounts/loadProvider',
    async() => {
        const connection = new ethers.providers.Web3Provider(window.ethereum)
        return connection;
    }
);

export const loadNetwork = createAsyncThunk(
    'accounts/loadNetwork',
    async() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const network = await provider.getNetwork();
        return network;
    }
);

export const loadAccount = createAsyncThunk(
    'accounts/loadAccount',
    async() => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        return account;
    }
);

export const loadBalance = createAsyncThunk(
    'accounts/loadBalance',
    async() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        const balance = await provider.getBalance(account);
        const balanceInEther = ethers.utils.formatEther(balance);
        const decimalBalance = parseFloat(balanceInEther).toFixed(4);
        return decimalBalance;
    }
 )
 

const initalAccountsState = {
    connection: null,
    chainId: null,
    account: null,
    balance: null
}

const accountsSlice = createSlice({
    name: 'accounts',
    initialState: initalAccountsState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadProvider.fulfilled, (state,action) => {
            state.connection = action.payload
        });
        builder.addCase(loadNetwork.fulfilled, (state,action) =>{
            state.chainId = action.payload
        });
        builder.addCase(loadAccount.fulfilled, (state,action) => { 
            state.account = action.payload
        });
        builder.addCase(loadBalance.fulfilled, (state, action) =>{
            state.balance = action.payload
        });
    }
});

export const accountActions = accountsSlice.actions;

export default accountsSlice.reducer;