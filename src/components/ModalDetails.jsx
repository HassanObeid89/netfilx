import { GrPlayFill } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useModal } from "../state/ModalProvider";
import EpisodeList from "./EpisodeList";

export default function ModalDetails({ show }) {

  const {dispatchModal}=useModal()
  const size = show.category === "series" && Object.keys(show.seasons).length;
  const season = size > 1 ? size + " " + "Seasons" : size + "Season";
  const videoId = show.videoLink || show.seasons["Season 1"][0].videoLink
  
  function onClose(){
    dispatchModal({ type: "SET_MODAL", payload: null })
    document.getElementById('root').setAttribute('style','')
  }

  return (
    <div className="details-wrapper">
      <section className="detail-hero">
        <img className="hero-img" src={show.imgUrl} alt="" />
        <div className="hero-shadow" />
        <Link to={`/watch/${videoId}`}>
        <button onClick={onClose} className="banner_btn_1">
          <GrPlayFill />
          Play
        </button>
        </Link>
      </section>
      <div className="body-wrapper">
        <section className="details-header">
          <p>New</p>
          <p>2021</p>
          <p className="rate">{show.maturityRating}</p>
          {size > 0 && <p>{season}</p>}
        </section>
        <p className="description">{show.description}</p>
        {size > 0 && <EpisodeList show={show} />}
      </div>
    </div>
  );
}
