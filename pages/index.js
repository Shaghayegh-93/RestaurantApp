import axios from "axios";
import Head from "next/head";
import Featured from "../components/Featured";
import OrderDetail from "../components/OrderDetail";
import PizzaList from "../components/PizzaList";
import Portal from "../components/Portal";

export default function Home({ pizzaList }) {
  return (
    <div>
      <Head>
        <title>Restaurant App</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Portal selector="#myportal">
          <OrderDetail />
        </Portal>
        <Featured />
        <PizzaList pizzaList={pizzaList} />
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
    },
  };
}
