import React from "react";
import Image from "next/image";
import Link from "next/link";

const PizzaCard = ({ pizza }) => {
  return (
    <div className='w-1/2 lg:w-1/4 flex flex-col justify-center items-center p-5'>
      <Link href={`/product/${pizza._id}`} passHref>
        <div className='cursor-pointer'>
          <Image
            src={pizza.image}
            alt=''
            width='500'
            height='500'
            objectFit='cover'
            className='rounded-full'
          />
        </div>
      </Link>
      <div>
        <div className='mt-5 font-bold text-center text-[#d1411e] box-content h-10'>
          {pizza.title}
        </div>
        <div className='text-center mt-5 font-semibold'>
          {pizza.price[0]} USD
        </div>
        <div className='mt-5 box-content h-40 w-full normal-case'>
          {pizza.desc}
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
