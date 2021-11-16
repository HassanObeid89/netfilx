import { useParams, useHistory } from "react-router-dom";
import Reatyoutube from "react-youtube";

export default function VideoPlayer() {
  const { id } = useParams();
  const location = useHistory();
  const opts = {
    height: "100%",
    width: "100%",
    controls: 0,
    playerVars: {
      autoplay: 1,
      controls: 1,
      modestbranding: 1,
      playsinline: 1,
    },
  };
  return (
    <div className="player_wrapper">
      <Reatyoutube
        className="player"
        opts={opts}
        allowsFullscreenVideo={true}
        videoId={id}
      />
      <button onClick={() => location.goBack()}>go back</button>
    </div>
  );
}
