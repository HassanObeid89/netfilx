import ModalMini from "./ModalMini";
import { useState } from "react";
import ModalContainerMini from "./ModalContainerMini";
export default function RowCard({ show }) {
  
  const [miniModal, setMiniModal] = useState(null);
  return (
      
    <div className="card_wrapper">
        <li>
          <img
            src={show.imgUrl}
            alt=""
            onMouseEnter={() => setMiniModal(<ModalMini setMiniModal={setMiniModal} show={show}/>)}
          />
      </li>
        <ModalContainerMini modal={miniModal}/>
    </div>
  );
}
