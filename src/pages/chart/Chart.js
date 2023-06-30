// ** Import React Router
import { Link, useNavigate } from "react-router-dom";

// ** Import Icons
import { BiArrowBack } from "react-icons/bi";
import { BsTrash3 } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

// ** Import CSS
import "./chart.css";

// ** Import Library Sweet Alert
import Swal from "sweetalert2";

const Chart = ({ chart, setChart, userLogin, history, setHistory }) => {
  // ** Untuk mencari chart user
  const cariKeranjangUser = chart.filter((ch) => ch.user_id === userLogin.id);

  const navigate = useNavigate();

  // ** Jika keranjang kosong
  if (cariKeranjangUser.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          gap: 50,
          marginTop: 150,
          color: "white",
        }}
      >
        <h1>Anda belum memilki barang di keranjang</h1>

        <Link to="/" className="btn-back-chart-notfound">
          <BiArrowBack style={{ marginTop: -2 }} />
          Kembali
        </Link>
      </div>
    );
  }

  // ** Untuk mencari jumlah setiap barang
  const totalJumlah = cariKeranjangUser
    .map((ch) => {
      return ch.total;
    })
    .reduce((acc, curr) => {
      return acc + curr;
    });

  // ** Delete Chart By Id
  const handleDelete = (id) => {
    Swal.fire({
      title: "Barang Berhasil di Hapus",
      background: "#1E1E1E",
      color: "#FFFFFF",
    });

    setChart(chart.filter((ch) => ch.random_id !== id));
  };

  // ** Mencari tanggal saati ini
  const tanggalSekarang = new Date().toDateString();

  // ** Memanimpulasi data untuk memasukan tanggal pembelian
  const manimpulasiData = cariKeranjangUser.map((data) => ({
    ...data,
    tanggal_pembelian: tanggalSekarang,
    rating: "",
  }));

  // ** Function untuk checkout
  const handleCheckout = () => {
    Swal.fire({
      title: "Berhasil Checkout",
      background: "#1E1E1E",
      color: "#FFFFFF",
    });

    // ** Melakukan penyimpanan ke data history state
    setHistory([...history, ...manimpulasiData.map((val) => val)]);

    // ** Hapus keranjang yang dimiliki oleh user
    setChart(chart.map((ch) => ch.user_id !== userLogin.id));

    // ** Pindah halaman ketika checkout berhasil
    navigate("/history-pembelian");
  };

  return (
    <div className="container-chart">
      <Link to="/" className="btn-back-chart">
        <BiArrowBack style={{ marginTop: -2 }} />
        Kembali
      </Link>

      <div className="sub-container-chart">
        {cariKeranjangUser?.map((ch) => (
          <div key={ch.random_id} className="container-main-chart">
            <div className="sub-main-chart">
              <img
                src={ch.image}
                alt="test"
                width={280}
                style={{ borderRadius: 20 }}
              />
              <div className="container-desc-chart">
                <h1>{ch.name}</h1>

                <h5 className="desc-product">{ch.description}</h5>

                <div className="content-product">
                  <p>Tipe : {ch.tipe}</p>
                  <p>Bahan : {ch.bahan}</p>
                  <p>Ukuran : {ch.ukuran}</p>
                </div>

                <h1>
                  {Intl.NumberFormat("id-ID", {
                    style: "currency",
                    maximumSignificantDigits: 10,
                    currency: "IDR",
                  }).format(ch.total)}
                </h1>
              </div>
            </div>

            <div className="sub-sec-chart">
              <h3
                onClick={() => handleDelete(ch.random_id)}
                style={{ marginRight: 20, cursor: "pointer" }}
              >
                <BsTrash3 style={{ fontSize: 27 }} />
              </h3>

              <h5
                onClick={() =>
                  // ** Dilakukan array manimpulasi agar bisa mengubah jumlah totalnya

                  setChart(
                    chart.map((c) => {
                      if (c.random_id === ch.random_id) {
                        return {
                          ...c,
                          // eslint-disable-next-line
                          ["jumlah"]: c.jumlah === 1 ? 1 : c.jumlah - 1,
                          // eslint-disable-next-line
                          ["total"]:
                            c.harga * (c.jumlah === 1 ? 1 : c.jumlah - 1),
                        };
                      } else {
                        return c;
                      }
                    })
                  )
                }
                className="count-chart"
              >
                <AiOutlineMinus />
              </h5>

              <input
                type="text"
                disabled
                value={ch.jumlah}
                className="input-chart"
              />

              <h5
                onClick={() =>
                  // ** Dilakukan array manimpulasi agar bisa mengubah jumlah totalnya
                  setChart(
                    chart.map((c) => {
                      if (c.random_id === ch.random_id) {
                        return {
                          ...c,
                          // eslint-disable-next-line
                          ["jumlah"]: c.jumlah + 1,
                          // eslint-disable-next-line
                          ["total"]: c.harga * (c.jumlah + 1),
                        };
                      } else {
                        return c;
                      }
                    })
                  )
                }
                className="count-chart"
              >
                <AiOutlinePlus />
              </h5>
            </div>
          </div>
        ))}
      </div>

      <div className="container-checkout">
        <h1>
          {/* Conver mata uang */}
          {Intl.NumberFormat("id-ID", {
            style: "currency",
            maximumSignificantDigits: 10,
            currency: "IDR",
          }).format(
            cariKeranjangUser.length === 1
              ? cariKeranjangUser[0].total
              : totalJumlah
          )}
        </h1>
        <button onClick={handleCheckout} className="btn-checkout">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Chart;
