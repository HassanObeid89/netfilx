import { GrPlayFill } from "react-icons/gr";
import EpisodeList from "./EpisodeList";

export default function ModalDetails({ show }) {
  const size = show.category === "series" && Object.keys(show.seasons).length;
  const season = size > 1 ? size + " " + "Seasons" : size + "Season";

  return (
    <div className="details-wrapper">
      <section className="detail-hero">
        <img className="hero-img" src={show.imgUrl} alt="" />
        <div className="hero-shadow" />
        <button className="banner_btn_1">
          <GrPlayFill />
          Play
        </button>
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
