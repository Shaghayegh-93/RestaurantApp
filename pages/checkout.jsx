import Layout from "../components/Layout";
import Link from "next/link";
import { useSelector } from "react-redux";
const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <Layout>
      <div className="h-[100vh] flex flex-col items-center justify-center">
        {cart
          ? `Order has been created successfully. Your order number is 666544546`
          : `Successfull. Your order is being prepared...`}
        <Link to="/" passHref>
          <button className="p-[10px] mt-5 ">Go to Homepage</button>
        </Link>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
