import { useState } from "react";
import Dropdown from "./Dropdown";
import EpisodeCard from "./EpisodeCard";
export default function EpisodeList({ show }) {
  const [isSelected, setIsSelected] = useState("Season 1");
  const Episodes = show.seasons[isSelected].map((episode) => (
    <EpisodeCard episode={episode} />
  ));
  return (
    <div>
      <section className="episodeSelector-header">
        <h2>Episodes</h2>
        <Dropdown state={[isSelected, setIsSelected]} show={show} />
      </section>
      <ol>{Episodes}</ol>
      {/* <Link
       className="primary-button"
        to={`/add-episode/${serie.id}/${season}`}
     >
        Add Episode
      </Link>  */}
    </div>
  );
}
