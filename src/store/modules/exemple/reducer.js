import produce from 'immer';
import types from '../exemple/types/actionTypes';

const INITIAL_STATE = {
  state: [],
};

export default function exemple(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case types.PRODUCT_SUCCESS:

        draft.state = action.payload;

        break;
        case types.PRODUCT_REQUEST:
          return {...state}
        default:
          return state;
    }
  });
}
