import ModalMini from "./ModalMini";
import { useState } from "react";
import ModalContainer from "./ModalContainer";
export default function RowCard({ show }) {
  
  const [modal, setModal] = useState(null);
  return (
      
    <div className="card_wrapper">
        <li>
          <img
            src={show.imgUrl}
            alt=""
            onMouseEnter={() => setModal(<ModalMini setModal={setModal} show={show}/>)}
          />
         
      </li>
   
        <ModalContainer modal={modal}/>
 
      {/* <li>
        {!isMini && (
          <img
            src={show.imgUrl}
            onMouseLeave={() => setIsMini(false)}
            onMouseEnter={() => setIsMini(true)}
            alt=""
          />
        )}
      </li> */}
      {/* <section className="mini_modal_wrapper">
        {isMini && (
          <img
            src={show.imgUrl}
            onMouseLeave={() => setIsMini(false)}
            onMouseEnter={() => setIsMini(true)}
            className="mini_modal"
          />
        )}
      </section> */}
    </div>
  );
}
