import { GrPlayFill } from "react-icons/gr";
import { AiOutlineInfoCircle } from "react-icons/ai";
import squid from "../assets/images/squid_banner.webp";
import squidName from "../assets/images/squid_name.webp";

/**
 * CSS architecture -1
 * This comment is not only for Banner but several components. Im putting it here because is the first component inside the components/ folder.
 * You are hardoding CSS into the JSX, you should conditionally toggle CSS classNames instead: https://www.pluralsight.com/guides/applying-classes-conditionally-react
 */
export default function Banner() {
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
