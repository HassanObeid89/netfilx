import { updateDocument } from "../scripts/firestore";

export default function FormAddSeason({ season, setSeason, data }) {
  async function onUpdate(event) {
    event.preventDefault();
    const updatedSerie = {
      ...data,
      seasons: { [season]: [] },
    };
    await updateDocument("shows", updatedSerie, data.id);
    updatedSerie.id = data.id;
    // dispatchCourses({ type: "UPDATE_COURSE", payload: updatedCourse });
    alert("Serie updated");
    setSeason([]);
  }

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
    </fieldset>
  );
}
