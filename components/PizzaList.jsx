import React from "react";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className='mt-10 max-w-7xl px-5 mx-auto'>
      <h1 className='text-center text-5xl font-bold text-[#d1411e]'>
        The Best Pizza in Town
      </h1>
      <p className='my-10'>
        Break away from your go-to order and try something new. Vieri
        Pizza&apos;s has a full selection of hand-made pizzas with delicious
        toppings. Whether you&apos;re in the mood for spicy Buffalo Chicken,
        Honolulu Hawaiian, or anything in between, Vieri Pizza&apos;s has you
        covered.
      </p>
      <div className='flex flex-wrap justify-center w-full items-center'>
        {pizzaList?.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
