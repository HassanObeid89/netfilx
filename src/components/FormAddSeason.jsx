import { useState } from "react";
import { useParams } from "react-router-dom";
import { updateDocument } from "../scripts/firestore";
import SeasonList from './SeasonList'
export default function FormAddSeason({ data }) {
  const {id} = useParams()
  const [season, setSeason] = useState([]);

  const serie = data.find((serie)=>serie.id === id)
   
  const Seasons = data.map((serie)=><SeasonList key={serie.id} seasons={serie.seasons}/>)

  async function onUpdate(event) {
    event.preventDefault();
    const updatedSerie = {
      ...serie,
      // seasons: {[season] :[]}
      seasons: [...serie.seasons,{name:season,episodes:[{}]}]
    };
    await updateDocument("shows", updatedSerie, serie.id);
    updatedSerie.id = serie.id;
    // dispatchCourses({ type: "UPDATE_COURSE", payload: updatedCourse });
    alert("Serie updated");
    setSeason([]);
  }
// const seasons = data.map(())
  return (
    <fieldset>
      <label>
        <span>Season</span>
        <input
          type="text"
          placeholder="season 1"
          value={season}
          onChange={(event) => setSeason(event.target.value)}
        />
      </label>
      <button onClick={(event) => onUpdate(event)}>Add Season</button>
      {data.seasons !==null && Seasons}
    </fieldset>
  );
}
