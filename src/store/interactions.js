import { ethers } from 'ethers'
import CAMPAIGN_ABI from '../abis/Campaign.json';

export const loadProvider = (dispatch) => {
    const connection = new ethers.providers.Web3Provider(window.ethereum);
    dispatch({type: 'PROVIDER_LOADED', connection})

    return connection;
}

// network 
export const loadNetwork = async (provider,dispatch) => {
  const { chainId } = await provider.getNetwork();
  dispatch({type: 'NETWORK_LOADED',chainId})

  return chainId;
}

// account address
export const loadAccounts = async (provider, dispatch) => {
  const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
  const account = ethers.utils.getAddress(accounts[0]);

  dispatch({type: 'ACCOUNTS_LOADED', account})

  let balance = await provider.getBalance(account);
  balance = ethers.utils.formatEther(balance);

dispatch({type: 'ETHER_BALANCE_LOADED', balance})

  return account;
}

// ------------------------------------------------------------------------------
// LOAD ALL Campaigns

export const loadCampaigns = async (provider, addresses, dispatch) => {
  let campaign;

  campaign = new ethers.Contract(addresses[0], CAMPAIGN_ABI, provider);
  const campaignData1 = await campaign.getData()
  dispatch({ type: 'CAMPAIGN_LOADED_1', contract: campaignData1 });

  campaign = new ethers.Contract(addresses[1], CAMPAIGN_ABI, provider);
  dispatch({ type: 'CAMPAIGN_LOADED_2', campaign });

  campaign = new ethers.Contract(addresses[2], CAMPAIGN_ABI, provider);
  dispatch({ type: 'CAMPAIGN_LOADED_3', campaign });

  return campaign;
}
// ------------------------------------------------------------------------------
// LOAD ALL ORDERS MADE 
export const loadOrders = async (provider, campaign, dispatch) => {

  const block = await provider.getBlockNumber();

  const orders= await campaign.queryFilter('Order', 0, block);
  const allOrders = orders.map(event => event.args)
  const balance = await provider.getBalance(campaign.address); // Retrieve the balance of the contract

  dispatch({type: 'ORDERS_LOADED', allOrders, balance});


  return orders;
}

