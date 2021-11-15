import { GrPlayFill } from "react-icons/gr";
import { AiOutlineInfoCircle } from "react-icons/ai";
import squid from "../assets/images/squid_banner.webp";
import squidName from "../assets/images/squid_name.webp";
export default function Banner({ series }) {
  
  return (
    <header>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${squid})`,
          backgroundPosition: "center center",
        }}
      />
      <div className="banner_contents">
        <img src={squidName} />
        <div className="banner_buttons">
          <button className="banner_btn_1">
            <GrPlayFill />
            Play
          </button>
          <button className="banner_btn_2">
            <AiOutlineInfoCircle />
            More Info
          </button>
        </div>
      </div>
      <div className="shadow" />
    </header>
  );
}
