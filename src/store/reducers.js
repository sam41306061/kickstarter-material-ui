export const provider = (state = {}, action) => {
    switch (action.type) {
      case 'PROVIDER_LOADED':
        return {
            ...state, // udpateing state
            connection: action.connection,
        }
        case 'NETWORK_LOADED': 
          return {
              ...state,
              chainId: action.chainId,
          }
          case 'ACCOUNTS_LOADED': 
            return {
                ...state,
                campaign: action.account,
            }
      default:
        return state
    }
  }

  export const campaign = (state = {loaded: false, contracts:[] }, action) => {
    switch (action.type) {
      case 'CAMPAIGN_LOADED_1':
        return {
            ...state, 
            loaded: true,
            contracts: [...state.contracts, action.contract]
        }
        case 'CAMPAIGN_LOADED_2':
          return {
              ...state, 
              loaded: true,
              contracts: [...state.contracts, action.contract]
          }
          case 'CAMPAIGN_LOADED_3':
          return {
              ...state, 
              loaded: true,
              contracts: [...state.contracts, action.contract]
          }
      default:
        return state
    }
  }
  