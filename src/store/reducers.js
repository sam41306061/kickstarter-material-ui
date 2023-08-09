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
                accounts: action.account,
            }
          case 'ETHERS_BALANCE_LOADED':
            return {
                ...state,
                balance: action.balance,
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

  const DEFAULT_ORDERS_STATE = {
    loaded: false,
    orders: []
  
  }


  export const submited = (state = DEFAULT_ORDERS_STATE, action) => {
    let index, data

    switch(action.type) {
      case 'SUBMITTED_LOADED':
        return {
          ...state,
          loaded: true,
          orders: [...state.orders, action.order]
        }
        case 'SUBMITTED_LOADED_2':
          return {
            ...state,
            loaded: true,
            orders: [...state.orders, action.order]
          }
          case 'SUBMITTED_LOADED_3':
          return {
            ...state,
            loaded: true,
            orders: [...state.orders, action.order]
          }
      default:
        return state
    }
  }