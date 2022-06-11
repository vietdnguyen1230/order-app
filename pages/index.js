import Head from "next/head";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PizzaList from "../components/PizzaList";
// import axios from "axios";
import { axiosInstance } from "../config";

export default function Home({ pizzaList }) {
  return (
    <>
      <Head>
        <title>Pizza Restaurant in San Francisco</title>
        <meta name='pizza' content='Best pizza in town' />
      </Head>
      <Navbar />
      <Featured />
      <PizzaList pizzaList={pizzaList} />
      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await axiosInstance.get(
    "https://order-app-bay.vercel.app/api/products",
  );

  return {
    props: {
      pizzaList: res?.data,
    },
  };
};
