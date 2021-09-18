import { ORDER_CREATED_FAIL, ORDER_CREATED_SUCCESS } from './orderActionType';
export const createOrder = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATED_SUCCESS:
      return {
        order: action.payload,
      };
    case ORDER_CREATED_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
