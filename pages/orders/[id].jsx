import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
// import axios from "axios";
import { axiosInstance } from "../../config";

const Orders = ({ order }) => {
  const status = order.status;
  return (
    <div>
      <Navbar />
      <section>
        <div className='relative mx-auto max-w-screen-2xl'>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            {/* Left */}
            <div className='py-12 bg-white md:py-24'>
              <div className='max-w-lg px-4 mx-auto lg:px-8'>
                <div className='mt-8'>
                  <p className='text-3xl text-[#d1411e] font-medium tracking-tight'>
                    Order ID{" "}
                  </p>
                  <p className='mt-1 text-md text-gray-500'>{order._id}</p>
                </div>
                {/* Map Items */}
                <div className='mt-12'>
                  <div className='flow-root'>
                    <ul className='-my-4 divide-y divide-gray-200'>
                      {/* Map Items */}
                      <li className='flex items-center justify-between py-4'>
                        <div className='flex items-start'>
                          <div className='ml-4'>
                            <p className='text-sm text-[#d1411e]'>CUSTOMER</p>

                            <dl className='mt-1 space-y-1 text-md text-gray-500'>
                              <div>
                                <dt className='inline'>{order.customer}</dt>
                              </div>
                            </dl>
                          </div>
                        </div>
                      </li>
                      {/* Map Items */}
                      <li className='flex items-center justify-between py-4'>
                        <div className='flex items-start'>
                          <div className='ml-4'>
                            <p className='text-sm text-[#d1411e]'>ADDRESS</p>

                            <dl className='mt-1 space-y-1 text-md text-gray-500'>
                              <div>
                                <dt className='inline'>{order.address}</dt>
                              </div>
                            </dl>
                          </div>
                        </div>
                      </li>
                      {/* Map Items */}
                      <li className='flex items-center justify-between py-4'>
                        <div className='flex items-start'>
                          <div className='ml-4'>
                            <p className='text-sm text-[#d1411e]'>TOTAL</p>

                            <dl className='mt-1 space-y-1 text-md text-gray-500'>
                              <div>
                                <dt className='inline'>{order.total} USD</dt>
                              </div>
                            </dl>
                          </div>
                        </div>
                      </li>
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
                    <div>{order.total} USD </div>
                  </div>
                  <div className='flex space-x-4 items-center text-2xl justify-between'>
                    <div>Discount: </div>
                    <div>0 USD </div>
                  </div>{" "}
                  <div className='flex space-x-4 items-center text-2xl justify-between'>
                    <div>Total: </div>
                    <div>{order.total} USD </div>
                  </div>
                </div>
                <button
                  className='rounded-lg bg-[#d1411e] text-md p-3 text-white w-full mx-auto block mt-5'
                  type='submit'
                  disabled
                >
                  PAID
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axiosInstance.get(
    `http://localhost:3001/api/orders/${params.id}`,
  );
  return {
    props: { order: res.data },
  };
};

export default Orders;
