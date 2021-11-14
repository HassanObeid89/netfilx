import ReactDom from "react-dom";
import { FaWindowClose } from "react-icons/fa";
import { useModal } from "../state/ModalProvider";

export default function ModalContainer() {
  const {modal}=useModal()
  console.log(modal)
  if (modal === null) return null;

  return ReactDom.createPortal(
    <>
      <div  className="modal-background"></div>
      <div className="modal-window ">
        <FaWindowClose className="icon" />
        {modal}
      </div>
    </>,
    document.getElementById("modal")
  );
}