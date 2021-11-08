import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { updateDocument } from "../scripts/firestore";
import SeasonList from "./SeasonList";
export default function FormAddSeason({ data }) {
  const { id } = useParams();
  const history = useHistory();
  const [season, setSeason] = useState([]);

  const serie = data.find((serie) => serie.id === id);

  const Seasons = data
    .filter((serie) => serie.id === id)
    .map((serie) => (
      <SeasonList key={serie.id} serie={serie} seasons={serie.seasons} />
    ));

  async function onUpdate(event) {
    event.preventDefault();
    const updatedSerie = {
      ...serie,
      seasons: { ...serie.seasons, [season]: [] },
    };
    await updateDocument("shows", updatedSerie, serie.id);
    updatedSerie.id = serie.id;
    // dispatchCourses({ type: "UPDATE_COURSE", payload: updatedCourse });
    alert("Serie updated");
    setSeason([]);
    history.pushState("/");
  }

  return (
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
      <button className='primary-button' onClick={(event) => onUpdate(event)}>Add Season</button>
      {data.seasons !== null && Seasons}
    </fieldset>
  );
}
