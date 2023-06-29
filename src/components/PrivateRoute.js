// ** Import React Router
import { Navigate, Outlet } from "react-router-dom";
import Swal from "sweetalert2";

const PrivateRoute = ({ userLogin }) => {
  // ** Validasi apakah user sudah login
  if (!userLogin) {
    Swal.fire({
      title: "Token tidak valid",
      text: "Anda login terlebih dahulu",
      background: "#1E1E1E",
      color: "#FFFFFF",
    });

    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
};

export default PrivateRoute;
