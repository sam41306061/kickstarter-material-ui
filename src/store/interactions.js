import { ethers } from 'ethers'
import CAMPAIGN_ABI from '../abis/Campaign.json';

export const loadProvider = (dispatch) => {
  const connection = new ethers.providers.Web3Provider(window.ethereum)
  dispatch({ type: 'PROVIDER_LOADED', connection })

  return connection
}

export const loadNetwork = async (provider, dispatch) => {
  const { chainId } = await provider.getNetwork()
  dispatch({ type: 'NETWORK_LOADED', chainId })

  return chainId
}

export const loadAccount = async (dispatch) => {
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
  const account = ethers.utils.getAddress(accounts[0])

  dispatch({ type: 'ACCOUNT_LOADED', account })

  return account
}

export const loadCampaign = async (provider, address, dispatch) => {
  let campagin

 campagin = new ethers.Contract(address, CAMPAIGN_ABI, provider)
  dispatch({ type: 'CAMPAIGN_LOADED', campagin })

  return campagin
}
