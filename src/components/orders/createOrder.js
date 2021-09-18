import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { createOrder } from '../../store/redux/orders/orderAction';

function CreateOrder() {
  const dispatch = useDispatch();
  // const orderCreate = useSelector((state) => state.createOrder);
  // console.log(orderCreate);

  const [orderData, setOrderData] = useState({
    orderName: '',
    discipline: '',
  });
  const { orderName, discipline } = orderData;

  const onChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createOrder({ orderName, discipline }));
  };
  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <label>
          Order Name:
          <input
            onChange={(e) => onChange(e)}
            value={orderName}
            type='text'
            name='orderName'
          />
        </label>
        <br /> <br />
        <label>
          Discipline:
          <input
            onChange={(e) => onChange(e)}
            value={discipline}
            type='text'
            name='discipline'
          />
        </label>
        <br /> <br />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default CreateOrder;
