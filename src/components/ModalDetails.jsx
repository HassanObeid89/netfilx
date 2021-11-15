import { GrPlayFill } from "react-icons/gr";
export default function ModalDetails({ show }) {
    const size = Object.keys(show.seasons).length;
    const season = size > 1 ? size +' '+ "Seasons": size+"Season"
  return (
    <div className="details-wrapper">
    <section>
      <img className="detail-hero" src={show.imgUrl} alt="" />
      <div className="hero-shadow" />
      <button className="banner_btn_1">
        <GrPlayFill />
        Play
      </button>
      </section>
      <section className='details-header'>
      <p>New</p>
      <p>2021</p>
      <span>{show.maturityRating}</span>
      <p>{season}</p>
      </section>
    </div>
  );
}
