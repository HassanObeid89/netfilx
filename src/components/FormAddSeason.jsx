//Npm packge
import { useParams, useHistory } from "react-router-dom";

//Project files
import { updateDocument } from "../scripts/firestore";
import { useShow } from "../state/ShowsProvider";
import EpisodeList from "./EpisodeList";

export default function FormAddSeason() {
  //Global state
  const { shows, dispatchShows } = useShow();

  const { id } = useParams();
  const history = useHistory();

  const serie = shows.find((serie) => serie.id === id);

  const Seasons = shows
    .filter((serie) => serie.id === id)
    .map((serie) => <EpisodeList key={serie.id} show={serie} />);

  //Methods
  async function onUpdate(event) {
    event.preventDefault();
    const seasonKey =
      "Season" + " " + Number(Object.keys(serie.seasons).length + 1);
    const updatedSerie = {
      ...serie,
      seasons: { ...serie.seasons, [seasonKey]: [] },
    };
    await updateDocument("shows", updatedSerie, serie.id);
    updatedSerie.id = serie.id;
    dispatchShows({ type: "UPDATE_SHOW", payload: updatedSerie });
    alert("Serie updated");
  }

  function goBack(event) {
    event.preventDefault();
    history.goBack();
  }

  return (
    <form className="form-wrapper">
      <p>
        Click add season if you want to add new one or add episode to add new
        episode to existing season
      </p>
      <button className="primary-button" onClick={(event) => onUpdate(event)}>
        Add Season
      </button>
      {serie.seasons !== {} ? (
        Seasons
      ) : (
        <p>No Seasons yet! Click Add Season To Add One</p>
      )}
      <button className="primary-button" onClick={(event) => goBack(event)}>
        Cancel
      </button>
    </form>
  );
}
