import ReactDom from "react-dom";
import { FaWindowClose } from "react-icons/fa";
import { useModal } from "../state/ModalProvider";

export default function ModalContainer() {
  const { modal, dispatchModal } = useModal();
  if (modal === null) return null;

  return ReactDom.createPortal(
    <>
      <div
        onClick={() => dispatchModal({ type: "SET_MODAL", payload: null })}
        className="modal-background"
      />
      <div className="modal-window ">
        <FaWindowClose
          className="icon"
          onClick={() => dispatchModal({ type: "SET_MODAL", payload: null })}
        />
        {modal}
      </div>
    </>,
    document.getElementById("modal")
  );
}
