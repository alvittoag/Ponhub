// ** Import Gambar
import assets from "../../assets/assets";

// ** Import React Router
import { Link, useNavigate } from "react-router-dom";

// ** Import CSS
import "./navbar.css";
import Swal from "sweetalert2";

const Navbar = ({ tokenLogin, setTokenLogin, chart, userLogin }) => {
  const navigate = useNavigate();

  // ** Function untuk logout
  const handleLogout = () => {
    // ** Menghapus token di state
    setTokenLogin(null);

    Swal.fire({
      title: "Anda Telah Logout",
      text: "Akun telah keluar dengan aman",
      background: "#1E1E1E",
      color: "#FFFFFF",
    });

    // ** Ketika selesai diarahkan ke halaman login
    navigate("/login");
  };

  // ** Untuk mencari jumlah chart setiap user
  const cariKeranjangUser = chart.filter((ch) => ch.user_id === userLogin.id);

  return (
    <div className="container">
      <div className="left-navbar">
        <img src={assets.logo} alt="logo" />

        <h1 className="text-heading">Ponhub</h1>
      </div>

      <div className="container-item-nav">
        {/* Ketika user login tombol login dihilangkan  */}
        {!tokenLogin && (
          <Link to="/login" className="btn-login">
            Login
          </Link>
        )}

        {/* Ketika user login maka tampilkan tombol tertentu */}
        {tokenLogin && (
          <>
            <Link to="/history-pembelian" className="button-chart">
              History Pembelian
            </Link>

            <Link to="/chart" className="button-chart">
              {cariKeranjangUser.length} Chart
            </Link>

            <button onClick={handleLogout} className="btn-login">
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
