// ** Import Gambar
import assets from "../../assets/assets";

// ** Import CSS
import "./banner.css";

// ** Import Type Effect
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <div className="container-banner">
      <div>
        <h1 className="title-banner">
          Sparkle with Elegance, Adorn Yourself with
          <Typewriter
            options={{
              strings: ["Brilliance!"],
              autoStart: true,
              loop: true,
            }}
          />
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
