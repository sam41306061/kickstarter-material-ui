const provider = (state = {}, action) => {
    switch (action.type) {
      case 'PROVIDER_LOADED':
        return {
            ...state, // udpateing state
            connection: action.connection,
        }
      default:
        return state
    }
  }