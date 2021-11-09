import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { updateDocument } from "../scripts/firestore";
import { useShow } from "../state/ShowsProvider";
import SeasonList from "./SeasonList";
export default function FormAddSeason() {
  const { id } = useParams();
  const history = useHistory();
  const { shows, dispatchShows } = useShow();
  const [season, setSeason] = useState([]);

  const serie = shows.find((serie) => serie.id === id);
  console.log(serie);
  const Seasons = shows
    .filter((serie) => serie.id === id)
    .map((serie) => (
      <SeasonList key={serie.id} serie={serie} seasons={serie.seasons} />
    ));
  console.log(Seasons);
  async function onUpdate(event) {
    event.preventDefault();
    const updatedSerie = {
      ...serie,
      seasons: { ...serie.seasons, [season]: [] },
    };
    await updateDocument("shows", updatedSerie, serie.id);
    updatedSerie.id = serie.id;
    dispatchShows({ type: "UPDATE_SHOW", payload: updatedSerie });
    alert("Serie updated");
    setSeason([]);
    
  }
function goBack(event){
  event.preventDefault()
  history.goBack()
}
  return (
    <form>
      <h1>Add Season</h1>
      <fieldset>
      <input
        type="text"
        placeholder="season 1"
        value={season}
        onChange={(event) => setSeason(event.target.value)}
      />
      <label>
        <span>Season One</span>
      </label>
      </fieldset>
      <button className="primary-button" onClick={(event) => onUpdate(event)}>
        Add Season
      </button>
      {shows.seasons !== null && Seasons}
      <button className='primary-button' onClick={(event)=>goBack(event)}>Go back</button>
    </form>
  );
}
