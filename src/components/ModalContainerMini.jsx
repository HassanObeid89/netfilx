export default function ModalContainerMini({modal}) {
  
  if (modal === null) return null;

  return (
      <div className="mini-window ">
        {modal}
      </div>
  );
}
