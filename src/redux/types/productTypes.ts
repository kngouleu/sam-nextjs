export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
  }

  
  export interface ProductState {
    loading: boolean;
    products: Product[];
    error: string | null;
  }
  
  export enum ProductActionTypes {
    FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE',
  }
  
  export interface FetchProductsRequestAction {
    type: ProductActionTypes.FETCH_PRODUCTS_REQUEST;
  }
  
  export interface FetchProductsSuccessAction {
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS;
    payload: Product[];
  }
  
  export interface FetchProductsFailureAction {
    type: ProductActionTypes.FETCH_PRODUCTS_FAILURE;
    payload: string;
  }
  
  export type ProductAction =
    | FetchProductsRequestAction
    | FetchProductsSuccessAction
    | FetchProductsFailureAction;
  