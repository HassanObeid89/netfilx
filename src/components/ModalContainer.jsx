export default function ModalContainer({modal,setModal}) {
  
  if (modal === null) return null;

  return (
      <div className="modal-window ">
        {modal}
      </div>
  );
}
