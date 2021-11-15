import { BiPlay } from "react-icons/bi";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useModal } from "../state/ModalProvider";
import ModalDetails from "./ModalDetails";

export default function ModalMini({ show, setMiniModal }) {
  const { dispatchModal } = useModal();

  return (
    <div onMouseLeave={() => setMiniModal(null)} className="mini_Modal_wrapper">
      <section>
        <img className='modal-hero' src={show.imgUrl} />
      </section>
      <section className="controls">
        <Link to={`/watch/${show.videoLink}`}>
          <button className="round-btn">
            <BiPlay />
          </button>
        </Link>
        <IoIosArrowDropdown
          onClick={() =>
            dispatchModal({ type: "SET_MODAL", payload: <ModalDetails show={show}/> })
          }
          className="detail-btn"
        />
      </section>
    </div>
  );
}
