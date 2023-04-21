export interface CartState {
    find(arg0: (item: { id: string; }) => boolean): unknown;
    cartItems: CartItem[];
  }
  
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

  
// export interface UpdateCartQuantityPayload {
//   id: string;
//   quantity: number;
// }


export enum CartActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY",
  EMPTY_CART = "EMPTY_CART",
  ADD_TO_CART_REQUEST = "ADD_TO_CART_REQUEST",
  ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS",
  ADD_TO_CART_FAILURE = "ADD_TO_CART_FAILURE",
  LOAD_CART_STATE_FROM_LOCAL_STORAGE = "LOAD_CART_STATE_FROM_LOCAL_STORAGE"
}
  
interface AddToCartAction {
  type: CartActionTypes.ADD_TO_CART;
  payload: CartItem;
}
  
interface RemoveFromCartAction {
  type: CartActionTypes.REMOVE_FROM_CART;
  payload: string;
}

interface UpdateCartQuantityAction {
  type: CartActionTypes.UPDATE_CART_QUANTITY;
  payload: {
    id: string;
    quantity: number;
  };
}

interface EmptyCartAction {
  type: CartActionTypes.EMPTY_CART;
}
  
export type CartAction = AddToCartAction | RemoveFromCartAction | UpdateCartQuantityAction | EmptyCartAction;
  