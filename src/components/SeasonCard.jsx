import { Link } from "react-router-dom";
import EpisodeCard from "./EpisodeCard";
export default function SeasonCard({ season, serie }) {
  
  const Episodes = serie.seasons[season].map((episode)=><EpisodeCard episode={episode}/>)
  console.log(Episodes)
  return (
    <li>
      {season}
      <ol>
        <p>Episodes:</p>
      {Episodes}
      </ol>
      <Link className='primary-button' to={`/add-episode/${serie.id}/${season}`}>Add Episode</Link>
    </li>
  );
}
