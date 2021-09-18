import { combineReducers } from 'redux';

import { createOrder } from './redux/orders/orderReducer';

const rootReducer = combineReducers({
  createOrder,
});

export default rootReducer;
