import { takeLatest, call, put, all } from 'redux-saga/effects';
import types from '../exemple/types/actionTypes';

import api from '../../../services/api';

export function* exempleSaga({ payload }) {
  
  try {
    let jsonResponse = yield call(api, payload)
    yield put({
      type: types.PRODUCT_SUCCESS,
      payload: jsonResponse.data
    })
  } catch (err) {
      console.error(err)
  }
}

export default all([takeLatest(types.PRODUCT_REQUEST, exempleSaga)]);
