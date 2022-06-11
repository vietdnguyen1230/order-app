import React from "react";
import { useRouter } from "next/router";
import { PhoneIcon } from "@heroicons/react/solid";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";
const Navbar = () => {
  const router = useRouter();
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className='bg-[#d1411e] p-2 flex items-center justify-between h-[70px]'>
      <div
        onClick={() => router.push("/")}
        className='flex items-center cursor-pointer'
      >
        <div className='bg-white rounded-full p-1 mr-2'>
          <PhoneIcon className='w-5 h-5 text-[#d1411e]' />
        </div>
        <div className='flex flex-col text-white cursor-pointer'>
          <div className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-black'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5'
              />
            </svg>
            <h1 className='text-white pl-1'>
              {" "}
              VIERI <span className='text-black'>PIZZA</span>
            </h1>
          </div>
          <div className='hidden md:inline-flex'>012 345 6789</div>
        </div>
      </div>
      <div className='text-center'>
        <ul className='flex space-x-5 md:space-x-10 text-white'>
          <li
            onClick={() => router.push("/")}
            className='cursor-pointer hover:text-gray-300'
          >
            Home
          </li>
          <li className='cursor-pointer hover:text-gray-300'>Products</li>
          <li className='cursor-pointer hover:text-gray-300'>Menu</li>
        </ul>
      </div>
      <div
        onClick={() => router.push("/cart")}
        className='flex items-center space-x-2 cursor-pointer'
      >
        <div className='bg-white leading-5 w-5 h-5 rounded-full items-center justify-center text-center text-[#d1411e]'>
          {quantity}
        </div>
        <div>
          <ShoppingCartIcon className='w-7 h-7 text-white' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
