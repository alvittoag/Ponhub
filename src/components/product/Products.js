// ** Import Data
import { products } from "../../data/products";

// ** Import Icons
import { MdAddShoppingCart } from "react-icons/md";

// ** Import Library Sweet Alert
import Swal from "sweetalert2";

// ** Import CSS
import "./products.css";
import { useState } from "react";
import { filters } from "../../data/filters";

const Products = ({ setChart, userLogin }) => {
  const [filter, setFilter] = useState("All");

  // ** Mencari produk berdasarkan filter
  // eslint-disable-next-line
  const filterProduct = products.filter((product) => {
    if (filter === "All") {
      return product;
    } else if (product.tipe === filter) {
      return product;
    }
  });

  // ** Function menambahkan barang ke keranjang
  const handleAddChart = (data) => {
    //**  Pengkondisian apakah user sudah login atau belum
    if (userLogin === null) {
      Swal.fire({
        title: "Gagal Menambahkan",
        text: "Anda login terlebih dahulu sebelum membeli barang",
        background: "#1E1E1E",
        color: "#FFFFFF",
      });
    } else {
      Swal.fire({
        title: "Berhasil Menambahkan Barang ke Keranjang",
        background: "#1E1E1E",
        color: "#FFFFFF",
      });

      // ** Proses memasukan data barang ke keranjang
      setChart((prev) => [
        ...prev,
        { user_id: userLogin.id, random_id: Math.random(), ...data },
      ]);
    }
  };

  return (
    <div className="container-products">
      <h1 className="title-products">Produk Yang Kami Tawarkan</h1>

      <div className="container-filter">
        {filters.map((fil) => (
          <h2
            key={fil.name}
            onClick={() => setFilter(fil.name)}
            className={`${
              fil.name === filter ? "active-filter" : "inactive-filter"
            }`}
          >
            {fil.name}
          </h2>
        ))}
      </div>

      {/* Mapping Semua Data Product */}
      <div className="container-main-product">
        {filterProduct.map((product) => (
          <div key={product.id} className="container-perProduct">
            <div>
              <img
                src={product.image}
                alt="product"
                width={350}
                style={{ borderRadius: 20 }}
              />

              <h1 className="title-product">{product.name}</h1>
            </div>

            <h5 className="desc-product">{product.description}</h5>

            <div className="content-product">
              <p>Tipe : {product.bahan}</p>
              <p>Bahan : {product.bahan}</p>
              <p>Ukuran : {product.ukuran}</p>
            </div>

            <h5 style={{ fontSize: 22 }}>
              {Intl.NumberFormat("id-ID", {
                style: "currency",
                maximumSignificantDigits: 10,
                currency: "IDR",
              }).format(product.harga)}
            </h5>

            <button
              onClick={() => handleAddChart(product)}
              className="button-addchart"
            >
              <MdAddShoppingCart style={{ fontSize: 24 }} />
              Tambahkan Ke Chart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
