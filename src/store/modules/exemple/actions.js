import types from '../exemple/types/actionTypes';

export function ProductLoaded(res) {
  return  {
    type: types.PRODUCT_SUCCESS,
    payload: { res }
  }
} 

export function ProductLoading() {
  return  {
    type: types.PRODUCT_REQUEST,
  }
} 