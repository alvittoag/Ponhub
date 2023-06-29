// ** Import React
import { useState } from "react";

// ** Import CSS
import "./App.css";

// ** Import Library React Router Dom
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// ** Import Halaman Pages
import Index from "./pages/Index";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import Daftar from "./pages/daftar/Daftar";
import Chart from "./pages/chart/Chart";
import History from "./pages/history/History";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  // ** Data User
  const [user, setUser] = useState([]);

  // ** Token Login
  const [tokenLogin, setTokenLogin] = useState(null);

  // ** User Login
  const [userLogin, setuserLogin] = useState(null);

  // ** Data Chart
  const [chart, setChart] = useState([]);

  // ** Data History Pembelian
  const [history, setHistory] = useState([]);

  return (
    <Router>
      <Navbar
        tokenLogin={tokenLogin}
        setTokenLogin={setTokenLogin}
        chart={chart}
        userLogin={userLogin}
      />
      <Routes>
        <Route
          path="/"
          element={<Index setChart={setChart} userLogin={userLogin} />}
        />

        <Route
          path="/login"
          element={
            <Login
              user={user}
              setTokenLogin={setTokenLogin}
              setuserLogin={setuserLogin}
            />
          }
        />

        <Route
          path="/daftar"
          element={<Daftar user={user} setUser={setUser} />}
        />

        <Route element={<PrivateRoute userLogin={userLogin} />}>
          <Route
            path="/chart"
            element={
              <Chart
                chart={chart}
                setChart={setChart}
                userLogin={userLogin}
                history={history}
                setHistory={setHistory}
              />
            }
          />

          <Route
            path="/history-pembelian"
            element={<History history={history} userLogin={userLogin} />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
