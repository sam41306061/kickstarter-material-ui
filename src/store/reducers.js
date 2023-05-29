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

  export const campaign = (state = {loaded: false, contract: null}, action) => {
    switch (action.type) {
      case 'CAMPAIGN_LOADED':
        return {
            ...state, 
            loaded: true,
            contract: action.campaign
        }
      default:
        return state
    }
  }
  