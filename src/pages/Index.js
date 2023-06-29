// ** Import Components
import Banner from "../components/banner/Banner";
import CustomerService from "../components/cs/CustomerService";
import Products from "../components/product/Products";

const Index = ({ setChart, userLogin }) => {
  return (
    <>
      <Banner />
      <Products setChart={setChart} userLogin={userLogin} />
      <CustomerService />
    </>
  );
};

export default Index;
