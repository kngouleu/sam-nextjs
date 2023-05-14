import { CartAction, CartActionTypes, CartItem } from '../types/cartTypes';

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      const itemToAdd = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === itemToAdd.id);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...itemToAdd, quantity: 1 }],
        };
      }
    case CartActionTypes.REMOVE_FROM_CART:
      const itemId = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== itemId),
      };
    case CartActionTypes.UPDATE_CART_QUANTITY:
      const { id, quantity } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === id ? { ...item, quantity: quantity } : item
        ),
      };
    case CartActionTypes.EMPTY_CART:
      return {
        ...state,
        cartItems: [],
      };
    
    default:
      return state;
  }
};



export default cartReducer;
