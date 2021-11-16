import ReactDom from "react-dom";
import { FaWindowClose } from "react-icons/fa";
import { useModal } from "../state/ModalProvider";

export default function ModalContainer() {
  const { modal, dispatchModal } = useModal();
  if (modal === null) return null;

  function onClose(){
    dispatchModal({ type: "SET_MODAL", payload: null })
    let windowOffset = window.scrollY
    document.getElementById('root').setAttribute('style','')
  }
  return ReactDom.createPortal(
    <>
      <div
        onClick={onClose}
        className="modal-background"
      />
      <div className="modal-window ">
        <FaWindowClose
          className="icon"
          onClick={onClose}
        />
        {modal}
      </div>
    </>,
    document.getElementById("modal")
  );
}
