import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
import { axiosInstance } from "../../config";
// import axios from "axios";

const Product = ({ pizza }) => {
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(pizza.price[0]);
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };
  const handleSize = (sizeIndex) => {
    const difference = pizza.price[sizeIndex] - pizza.price[size];
    setSize(sizeIndex);
    changePrice(difference);
  };
  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
    console.log(extras);
  };

  const handleClick = () => {
    dispatch(addProduct({ ...pizza, extras, price, quantity }));
  };
  return (
    <div>
      <Navbar />
      <div className='my-20 max-w-7xl mx-auto md:grid md:grid-cols-2'>
        {/* Left */}
        <div className='col-span-1 flex items-center justify-center'>
          <Image
            src={pizza.image}
            alt=''
            width='400'
            height='400'
            className='rounded-full'
          />
        </div>
        {/* Right */}
        <div className='col-span-1 order-2 flex flex-col justify-center m-10 space-y-5'>
          <h1 className='text-3xl font-bold'>{pizza.title}</h1>
          <div className='text-1xl text-[#d1411e] font-semibold'>
            {price} USD
          </div>
          <div>{pizza.desc}</div>
          <h3 className='font-bold'>Choose the sizes:</h3>
          <div className='flex items-center space-x-5'>
            <div
              onClick={() => handleSize(0)}
              className='flex items-center space-x-3 cursor-pointer'
            >
              <Image src='/images/size.png' height='40' width='40' />
              <span className='hover:border-b-2'>Small</span>
            </div>
            <div
              onClick={() => handleSize(1)}
              className='flex items-center space-x-3 cursor-pointer'
            >
              <Image src='/images/size.png' height='50' width='50' />
              <span className='hover:border-b-2'>Medium</span>
            </div>{" "}
            <div
              onClick={() => handleSize(2)}
              className='flex items-center space-x-3 cursor-pointer'
            >
              <Image src='/images/size.png' height='60' width='60' />
              <span className='hover:border-b-2'>Large</span>
            </div>
          </div>
          <h3 className='font-bold'>Choose additional ingredients:</h3>
          <div className='flex flex-col space-y-2'>
            {pizza.extraOptions.map((option) => (
              <div key={option._id} className='flex items-center space-x-3'>
                <input
                  type='checkbox'
                  id={option.text}
                  name={option.text}
                  className='rounded-lg'
                  onChange={(e) => handleChange(e, option)}
                />
                <label htmlFor={option.text}>{option.text}</label>
              </div>
            ))}
          </div>
          <div className='flex space-x-10'>
            <input
              onChange={(e) => setQuantity(e.target.value)}
              type='number'
              defaultValue={quantity}
              className='w-20 h-10 text-center'
              min={1}
            />
            <button
              onClick={handleClick}
              className='bg-[#d1411e] hover:bg-[#db826c] ease-in py-2 px-5 rounded-full cursor-pointer text-white'
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;

export const getServerSideProps = async ({ params }) => {
  const res = await axiosInstance.get(
    `https://order-app-bay.vercel.app/api/products/${params.id}`,
  );

  return {
    props: {
      pizza: res.data,
    },
  };
};
