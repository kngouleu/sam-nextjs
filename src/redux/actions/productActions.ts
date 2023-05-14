import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store/configureStore';
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
} from '../constants/productConstants';
import { db } from '../../firebase/firebaseConfig';
import { Product } from '../../types/types';
import { AnyAction } from 'redux';
import { Firestore, addDoc, getDocs } from 'firebase/firestore';

// Action types
export interface FetchProductsRequestAction {
  type: typeof FETCH_PRODUCTS_REQUEST;
}

export interface FetchProductsSuccessAction {
  type: typeof FETCH_PRODUCTS_SUCCESS;
  payload: Product[];
}

export interface FetchProductsFailureAction {
  type: typeof FETCH_PRODUCTS_FAILURE;
  payload: string;
}

export interface AddProductRequestAction {
  type: typeof ADD_PRODUCT_REQUEST;
}

export interface AddProductSuccessAction {
  type: typeof ADD_PRODUCT_SUCCESS;
  payload: Product;
}

export interface AddProductFailureAction {
  type: typeof ADD_PRODUCT_FAILURE;
  payload: string;
}

export type ProductAction =
  | FetchProductsRequestAction
  | FetchProductsSuccessAction
  | FetchProductsFailureAction
  | AddProductRequestAction
  | AddProductSuccessAction
  | AddProductFailureAction;

// Action creators
export const fetchProducts = (): ThunkAction<
  void,
  RootState,
  null,
  AnyAction
> => async (dispatch) => {
  dispatch({
    type: FETCH_PRODUCTS_REQUEST,
  });

  try {
    // const snapshot = await db.collection('products').get();
    // const products = snapshot.docs.map((doc: { id: any; data: () => any; }) => ({
    //   id: doc.id,
    //   ...doc.data(),
    // })) as Product[];
    const productsRef = collection(db, 'products');
    const snapshot = await getDocs(productsRef);
    const fetchedProducts: Product[] = [];
    snapshot.forEach((doc) => {
      const data = doc.data();
      fetchedProducts.push({
        id: doc.id,
        name: data.name,
        description: data.description,
        price: data.price,
        imageUrl: data.imageUrl,
        userId: ''
      });
    });

    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: snapshot,
    });
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS_FAILURE,
      payload: error as string,
    });
  }
};

function collection(db: Firestore, arg1: string): import("@firebase/firestore").CollectionReference<any> {
    throw new Error('Function not implemented.');
}
