export const initialState = {
  theme: 'light',
  cart: []
}

export function appReducer(state, action) {
  switch (action.type) {

    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      }

    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((_, index) => index !== action.payload)
      }

    case 'CLEAR_CART':
      return {
        ...state,
        cart: []
      }

    default:
      return state
  }
}