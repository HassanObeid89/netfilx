import { Link } from "react-router-dom";
import { useModal } from "../state/ModalProvider";
export default function EpisodeCard({ episode }) {
  const { dispatchModal } = useModal();
  return (
    <Link
      onClick={() => dispatchModal({ type: "SET_MODAL", payload: null })}
      to={`/watch/${episode.videoLink}`}
    >
      <li className="episode-row">
          <h2>{episode.name}</h2>
          <p>{episode.description}</p>
    </li>
    </Link>
  );
}
