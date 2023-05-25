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

// campaign address
export const loadAccounts = async (dispatch) => {
  const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
  const account = ethers.utils.getAddress(accounts[0]);

  dispatch({type: 'ACCOUNTS_LOADED',account})

  return account;
}


export const loadCampaign = async (provider, campaignAddress, dispatch) => {
  let campaign
  
  campaign = new ethers.Contract(campaignAddress, CAMPAIGN_ABI, provider);

  dispatch({type: 'CAMPAIGN_LOADED', campaign})

  return campaign;
}