import { Link } from "react-router-dom";
export default function SeasonCard({ season, serie }) {
  return (
    <li>
      {season}
      <Link to={`/add-episode/${serie.id}/${season}`}>Add Episode</Link>
    </li>
  );
}
