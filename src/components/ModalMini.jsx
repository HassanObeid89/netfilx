import { BiPlay } from "react-icons/bi";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useModal } from "../state/ModalProvider";
import ModalDetails from "./ModalDetails";

export default function ModalMini({ show, setMiniModal }) {
  const { dispatchModal } = useModal();
  const videoId = show.videoLink || show.seasons["Season 1"][0].videoLink;

  function onOpen() {
    dispatchModal({ type: "SET_MODAL", payload: <ModalDetails show={show} /> });

    let windowOffset = window.scrollY;
    document
      .getElementById("root")
      .setAttribute(
        "style",
        `position: fixed; top: -${windowOffset}px; left:0;right:0`
      );
  }

  return (
    <div onMouseLeave={() => setMiniModal(null)} className="mini_Modal_wrapper">
      <section>
        <img className="modal-hero" src={show.imgUrl} />
      </section>
      <section className="controls">
        <Link to={`/watch/${videoId}`}>
          <button className="round-btn">
            <BiPlay />
          </button>
        </Link>
        <IoIosArrowDropdown onClick={onOpen} className="detail-btn" />
      </section>
    </div>
  );
}
