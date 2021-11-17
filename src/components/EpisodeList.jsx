import { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../state/UserProvider";

import Dropdown from "./Dropdown";
import EpisodeCard from "./EpisodeCard";
export default function EpisodeList({ show }) {
  const {user}=useUser()
  const [isSelected, setIsSelected] = useState("Season 1");

  const Episodes =
    show.seasons[isSelected] !== undefined &&
    show.seasons[isSelected].map((episode) => (
      <EpisodeCard episode={episode} />
    ));
    
  return (
    <div>
      {show.seasons[isSelected] !== undefined ? (
        <section className="episodeSelector-header">
          <h2>Episodes</h2>
          <Dropdown state={[isSelected, setIsSelected]} show={show} />
        </section>
      ) : (
        <p>Comming Soon...</p>
      )}
      <ol>{show.seasons !== {} && Episodes}</ol>
      {show.seasons[isSelected] !== undefined && user.role==='admin' && (
        <Link
          className="primary-button"
          to={`/add-episode/${show.id}/${isSelected}`}
        >
          Add Episode
        </Link>
      )}
    </div>
  );
}
