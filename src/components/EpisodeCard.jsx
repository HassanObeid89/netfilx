import { Link } from "react-router-dom";
import { useModal } from "../state/ModalProvider";
export default function EpisodeCard({ episode }) {
  const { dispatchModal } = useModal();

  function onClose() {
    dispatchModal({ type: "SET_MODAL", payload: null });
    document.getElementById("root").setAttribute("style", ""); // related to the comment on Banner.jsx -1
  }

  return (
    <li className="episode-row">
      <Link onClick={onClose} to={`/watch/${episode.videoLink}`}>
        <h3>{episode.name}</h3>
        <p>{episode.description}</p>
      </Link>
    </li>
  );
}
