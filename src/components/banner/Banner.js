// ** Import Gambar
import assets from "../../assets/assets";

// ** Import CSS
import "./banner.css";

const Banner = () => {
  return (
    <div className="container-banner">
      <div>
        <h1 className="title-banner">
          Sparkle with Elegance, Adorn Yourself with Brilliance!
        </h1>

        <p className="sub-banner">
          Website Penjulan Perhiasaan Termurah di Indonesia
        </p>
      </div>

      <img src={assets.banner} alt="banner" />
    </div>
  );
};

export default Banner;
