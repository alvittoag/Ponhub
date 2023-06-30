// ** Import React
import { useState } from "react";

// ** Import CSS
import "./login.css";

// ** Import React Router
import { Link, useNavigate } from "react-router-dom";

// ** Import Library Sweet Alert
import Swal from "sweetalert2";

const Login = ({ user, setTokenLogin, setuserLogin }) => {
  // ** State untuk menyimpan setiap input di form
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  // ** State untuk set error ketika login
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // ** Function untuk memasukan setiap input ke object nya masing-masing
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });

    setError("");
  };

  const handleSubmit = (e) => {
    // ** Supaya Tidak Refresh Halamannya
    e.preventDefault();

    // ** Ketika data user kosong
    user.length === 0 && setError("* Email atau Password Salah");

    // ** Method find untuk mencari email dan password yang sama
    // eslint-disable-next-line
    user.find((us) => {
      if (us.email === input.email && us.password === input.password) {
        Swal.fire({
          title: "Anda Berhasil Login",
          text: "Akun Telah Terverifikasi",
          background: "#1E1E1E",
          color: "#FFFFFF",
        });

        // ** Untuk menyimpan data user ketika login berhasil
        setuserLogin(us);

        // ** Untuk menyimpan token ketika login berhasil
        setTokenLogin(Math.random());

        // ** Melakukan perpindahan halaman
        navigate("/");
      } else {
        // ** Set error ketika tidak sesuai
        setError("* Email atau Password Salah");
      }
    });
  };

  return (
    <div className="container-login">
      <form onSubmit={handleSubmit} className="sub-container-login">
        <div className="container-main-login">
          <label className="label-input" htmlFor="email">
            Email
          </label>

          <input
            name="email"
            value={input.email}
            onChange={handleInput}
            placeholder="user@gmail.com"
            className="input-auth"
            type="email"
            required
          />
        </div>

        <div className="container-main-login">
          <label className="label-input" htmlFor="password">
            Password
          </label>

          <input
            name="password"
            value={input.password}
            onChange={handleInput}
            placeholder="xxxxxxxxxx"
            className="input-auth"
            type="password"
            required
          />
        </div>

        <div className="container-button-login">
          {error.length >= 1 && (
            <p style={{ color: "red", fontSize: 19 }}>{error}</p>
          )}

          <button className="button-login">Masuk</button>
          <p>
            Belum punya akun ?{" "}
            <Link to="/daftar" className="text-daftar">
              Daftar
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
