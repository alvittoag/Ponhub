// ** Import CSS
import { Link } from "react-router-dom";
import "./history.css";

const History = ({ userLogin, history }) => {
  // ** Mencari history berdasarkan user yang login
  const findHistoryUser = history.filter((hs) => hs.user_id === userLogin.id);

  // ** Jika keranjang kosong
  if (findHistoryUser.length === 0) {
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
        <h1>Anda belum memilki history pembelian</h1>

        <Link to="/" className="btn-back-chart">
          Kembali
        </Link>
      </div>
    );
  }

  return (
    <div className="container-history">
      <Link to="/" className="btn-back-chart">
        Kembali
      </Link>

      {findHistoryUser.map((his) => (
        <div key={his.random_id} className="container-content-history">
          <div className="container-maincontent-history">
            <img
              src={his.image}
              alt="product"
              style={{ borderRadius: 10 }}
              width={250}
            />

            <div className="container-sec-history">
              <h1>{his.name}</h1>

              <h4 className="desc-history">{his.description}</h4>

              <div className="content-product">
                <p>Tipe : {his.tipe}</p>
                <p>Bahan : {his.bahan}</p>
                <p>Ukuran : {his.ukuran}</p>
              </div>

              <h3>Jumlah Barang : {his.jumlah}</h3>
            </div>
          </div>

          <div className="container-info-history">
            <h1>
              {" "}
              {Intl.NumberFormat("id-ID", {
                style: "currency",
                maximumSignificantDigits: 10,
                currency: "IDR",
              }).format(his.total)}
            </h1>
            <h3>Tangal Pembelian : {his.tanggal_pembelian}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default History;
