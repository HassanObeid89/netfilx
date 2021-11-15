import { useState } from "react";
import { GrPlayFill } from "react-icons/gr";
import Dropdown from "./Dropdown";
export default function ModalDetails({ show }) {
    const [isSelected, setIsSelected] = useState("Season 1");
    const size = Object.keys(show.seasons).length;
    const season = size > 1 ? size +' '+ "Seasons": size+"Season"
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
      <section className='details-header'>
      <p>New</p>
      <p>2021</p>
      <span>{show.maturityRating}</span>
      <p>{season}</p>
      </section>
        <section className='episodeSelector-header'>
            <h3>Episodes</h3>
        <Dropdown state={[isSelected,setIsSelected]} show={show}/>
        </section>
    </div>
  );
}
