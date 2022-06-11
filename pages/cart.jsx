import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";
// import axios from "axios";
import { axiosInstance } from "../config";
// import OrderDetail from "../components/OrderDetail";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  // const [cash, setCash] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  // This values are the props in the UI
  const amount = cart.total;
  const currency = "USD";
  const style = { layout: "vertical" };

  const createOrder = async (data) => {
    try {
      const res = await axiosInstance.post(
        "https://order-app-bay.vercel.app/api/orders",
        data,
      );
      if (res.status === 200) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const clearCart = () => {
    dispatch(reset());
  };

  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className='spinner' />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              console.log(details);
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };
  return (
    <div>
      <Navbar />
      <section>
        <div className='relative mx-auto max-w-screen-2xl'>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='py-12 bg-white md:py-24'>
              <div className='max-w-lg px-4 mx-auto lg:px-8'>
                <div className='flex items-center justify-between'>
                  <h2 className='font-medium text-left text-2xl'>
                    VIERI PIZZA
                  </h2>
                  {cart.total > 1 && (
                    <div>
                      <button
                        onClick={clearCart}
                        className='text-red-700 cursor-pointer'
                      >
                        Empty Cart{" "}
                      </button>
                    </div>
                  )}
                </div>

                <div className='mt-8'>
                  <p className='text-2xl text-[#d1411e] font-medium tracking-tight'>
                    {cart.total} USD
                  </p>
                  <p className='mt-1 text-md text-gray-500'>
                    For the purchase of
                  </p>
                </div>
                {/* Map Items */}
                <div className='mt-12'>
                  <div className='flow-root'>
                    <ul className='-my-4 divide-y divide-gray-200'>
                      {/* Map Items */}
                      {cart?.products.map((product) => (
                        <li
                          key={product._id}
                          className='flex items-center justify-between py-4'
                        >
                          <div className='flex items-start'>
                            <img
                              className='flex-shrink-0 object-cover w-16 h-16 rounded-lg'
                              src={product.image}
                              alt=''
                            />

                            <div className='ml-4'>
                              <p className='text-sm text-[#d1411e]'>
                                {product.title}
                              </p>

                              <dl className='mt-1 space-y-1 text-md text-gray-500'>
                                {product.extras.map((extra) => (
                                  <div key={extra._id}>
                                    <dt className='inline'>Extras: </dt>
                                    <dd className='inline'>{extra.text}</dd>
                                  </div>
                                ))}
                              </dl>
                            </div>
                          </div>

                          <div>
                            <p className='text-md'>
                              {product.price} USD{" "}
                              <small className='text-gray-500'>
                                x{product.quantity}
                              </small>
                            </p>
                          </div>
                        </li>
                      ))}

                      {/* <li className='flex items-center justify-between py-4'>
                        <div className='flex items-start'>
                          <img
                            className='flex-shrink-0 object-cover w-16 h-16 rounded-lg'
                            src='/images/pizza.png'
                            alt=''
                          />

                          <div className='ml-4'>
                            <p className='text-sm text-[#d1411e]'>CORALZO</p>

                            <dl className='mt-1 space-y-1 text-md text-gray-500'>
                              <div>
                                <dt className='inline'>Extras: </dt>
                                <dd className='inline'>Spicy Sauce</dd>
                              </div>
                            </dl>
                          </div>
                        </div>

                        <div>
                          <p className='text-md'>
                            30 USD <small className='text-gray-500'>x1</small>
                          </p>
                        </div>
                      </li>
                      {/* Map Items */}
                      {/* <li className='flex items-center justify-between py-4'>
                        <div className='flex items-start'>
                          <img
                            className='flex-shrink-0 object-cover w-16 h-16 rounded-lg'
                            src='/images/pizza.png'
                            alt=''
                          />

                          <div className='ml-4'>
                            <p className='text-sm text-[#d1411e]'>CORALZO</p>

                            <dl className='mt-1 space-y-1 text-md text-gray-500'>
                              <div>
                                <dt className='inline'>Extras: </dt>
                                <dd className='inline'>Spicy Sauce</dd>
                              </div>
                            </dl>
                          </div>
                        </div>

                        <div>
                          <p className='text-md'>
                            25 USD <small className='text-gray-500'>x2</small>
                          </p>
                        </div>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className='py-12 bg-white md:py-24'>
              <div className='max-w-lg px-4 mx-auto lg:px-8'>
                <div className='flex'>
                  <h2 className='font-medium text-left text-2xl mb-10 text-[#d1411e]'>
                    CART TOTAL
                  </h2>
                </div>
                <div className='flex flex-col space-y-4'>
                  <div className='flex space-x-4 items-center text-2xl justify-between'>
                    <div>Subtotal: </div>
                    <div>{cart.total} USD </div>
                  </div>
                  <div className='flex space-x-4 items-center text-2xl justify-between'>
                    <div>Discount: </div>
                    <div>0 USD </div>
                  </div>{" "}
                  <div className='flex space-x-4 items-center text-2xl justify-between'>
                    <div>Total: </div>
                    <div>{cart.total} USD </div>
                  </div>
                </div>
                <div className='mt-5'>
                  {open ? (
                    <div>
                      {/* <button
                        onClick={() => setCash(true)}
                        className='mb-4 rounded-lg bg-black text-md p-3 text-white w-full mx-auto block mt-5'
                      >
                        CASH ON DELIVERY
                      </button> */}
                      <PayPalScriptProvider
                        options={{
                          "client-id":
                            "ATdcSth-wcFoziyb6_oKfcIvjGrFOFt5uiWaO0-W2wEhMUIphqF4z9HsbadLLIjm-1bu9Qw65sYdudnD",
                          components: "buttons",
                          currency: "USD",
                        }}
                      >
                        <ButtonWrapper
                          currency={currency}
                          showSpinner={false}
                        />
                      </PayPalScriptProvider>
                    </div>
                  ) : (
                    <button
                      className='rounded-lg bg-black text-md p-3 text-white w-full mx-auto block mt-5'
                      type='submit'
                      onClick={() => setOpen(true)}
                    >
                      Pay Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* {cash && (
            <OrderDetail
              total={cart.total}
              createOrder={createOrder}
            />
          )} */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Cart;
