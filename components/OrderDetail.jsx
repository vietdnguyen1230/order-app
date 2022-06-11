import React, { useState } from "react";
import { useSelector } from "react-redux";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const cart = useSelector((state) => state.cart);
 

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center bg-gray-500/[.50] z-[999]'>
      <div className='w-[500px] bg-white rounded-lg p-10 flex flex-col items-center opacity-100'>
        <h1 className='text-2xl text-gray-800 text-center my-5'>
          You will pay {cart.total} USD after delivery.
        </h1>
        <div className='flex flex-col w-full space-y-3'>
          <label className=''>Name</label>
          <input
            type='text'
            className='rounded-lg'
            placeholder='Your Name'
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className='flex flex-col w-full space-y-3 mt-3'>
          <label className=''>Address</label>
          <textarea
            rows={5}
            placeholder='123 Main Street, San Francisco, CA 94123'
            type='text'
            className='rounded-lg'
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button
          className='rounded-lg bg-black text-md p-3 text-white w-full mx-auto block mt-5'
          onClick={handleClick}
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
