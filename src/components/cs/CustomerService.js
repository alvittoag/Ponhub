// ** Import CSS
import "./customerService.css";

// ** Import Icons
import { BsInfoSquare } from "react-icons/bs";
import { BsTelephoneForward } from "react-icons/bs";

const CustomerService = () => {
  return (
    <div className="container-service">
      <h1 className="title-service">
        <BsInfoSquare style={{ backgroundColor: "#2B2A2A" }} />
        Hubungi Layanan Customer Service Kami
      </h1>
      <h1 className="sub-service">
        <BsTelephoneForward style={{ backgroundColor: "#2B2A2A" }} />
        085757475766
      </h1>
    </div>
  );
};

export default CustomerService;
