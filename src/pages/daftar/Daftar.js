// ** Import React
import { useState } from "react";

// ** Import CSS
import "./daftar.css";

// ** Import React Router
import { Link, useNavigate } from "react-router-dom";

// ** Import Library Sweet Alert
import Swal from "sweetalert2";

const Daftar = ({ user, setUser }) => {
  // ** State untuk menyimpan setiap input di form
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    telephone: "",
  });

  // ** Function untuk memasukan setiap input ke object nya masing-masing
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  // ** Function untuk memasukan data input ke useState user pada app.js
  const handleSubmit = (e) => {
    // ** Supaya Tidak Refresh Halamannya
    e.preventDefault();

    Swal.fire({
      title: "Anda Berhasil Daftar",
      text: "Silahkan Login Untuk Melanjutkan",
      background: "#1E1E1E",
      color: "#FFFFFF",
    });

    // ** Proses Menyimpan User
    setUser([...user, { id: Math.random(), ...input }]);

    // ** Setelah data tersimpan maka akan pindah ke halaman login
    navigate("/login");
  };

  return (
    <div className="container-daftar">
      <form onSubmit={handleSubmit} className="sub-container-daftar">
        <div className="container-main-daftar">
          <label className="label-input" htmlFor="username">
            Username
          </label>

          <input
            value={input.username}
            name="username"
            onChange={handleInput}
            placeholder="Yazid bin Wazid"
            className="input-auth-daftar"
            type="text"
            required
          />
        </div>

        <div className="container-main-login">
          <label className="label-input" htmlFor="email">
            Email
          </label>

          <input
            name="email"
            value={input.email}
            onChange={handleInput}
            placeholder="user@gmail.com"
            className="input-auth-daftar"
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
            value={input.passwrod}
            onChange={handleInput}
            placeholder="xxxxxxxxxx"
            className="input-auth-daftar"
            type="password"
            required
          />
        </div>

        <div className="container-main-login">
          <label className="label-input" htmlFor="telpone">
            No Telephone
          </label>

          <input
            name="telephone"
            value={input.telephone}
            onChange={handleInput}
            placeholder="0899890809"
            className="input-auth-daftar"
            type="tel"
            required
          />
        </div>

        <div className="container-button-login">
          <button className="button-login">Daftar</button>
          <p>
            Sudah punya akun ?{" "}
            <Link to="/login" className="text-daftar">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Daftar;
