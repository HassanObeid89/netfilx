export default function ModalContainerMini({modal}) {
  
  if (modal === null) return null;

  return (
      <div className="modal-window ">
        {modal}
      </div>
  );
}
