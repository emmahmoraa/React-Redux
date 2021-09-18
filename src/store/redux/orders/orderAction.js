import axios from 'axios';

import { ORDER_CREATED_FAIL, ORDER_CREATED_SUCCESS } from './orderActionType';

export const createOrder = (order) => async (dispatch) => {
  //call backend to create a product
  //   const response = await axios.post(baseUrl + `/`, {...order})
  console.log({ order });
  const response = await axios.post(
    'https://jsonplaceholder.typicode.com/posts',
    { ...order }
  );
  console.log({ response });
  try {
    dispatch({
      type: ORDER_CREATED_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ORDER_CREATED_FAIL,
      payload: message,
    });
  }
};
