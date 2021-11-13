import {BiPlay} from 'react-icons/bi'
import { Link } from 'react-router-dom';
export default function ModalMini({show,setModal}) {
  return (
    <div onMouseLeave={() => setModal(null)} className='mini_Modal_wrapper'>
      <section>
      <img src={show.imgUrl}/>
      </section>
      <section className='controls'>
        <Link to={`/watch/${show.videoLink}`}>
        <button className='round-btn'>
          <BiPlay/>
        </button>
        </Link>
      </section>

    </div>
  );
}
