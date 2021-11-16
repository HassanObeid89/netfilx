import { Link } from "react-router-dom";
import { useModal } from "../state/ModalProvider";
export default function EpisodeCard({ episode }) {
  const { dispatchModal } = useModal();
  return (
    
      <li className="episode-row">
        <Link
      onClick={() => dispatchModal({ type: "SET_MODAL", payload: null })}
      to={`/watch/${episode.videoLink}`}
    >
          <h3>{episode.name}</h3>
          <p>{episode.description}</p>
          </Link>
    </li>
    
  );
}
