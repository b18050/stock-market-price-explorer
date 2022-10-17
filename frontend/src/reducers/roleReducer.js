const roleReducer = (state = 'USER', action) => {
    switch (action.type) {
      case 'SET_ROLE':
        return action.role
      default:
        return state
    }
  }
  
  export const roleChange = role => {
    return {
      type: 'SET_ROLE',
      role,
    }
  }
  
  export default roleReducer