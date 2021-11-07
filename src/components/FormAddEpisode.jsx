import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import fieldsAddEpisode from "../data/fields-addEpisode";
import { updateDocument } from "../scripts/firestore";
import InputField from "./InputField";

export default function FormAddEpisode({ data }) {
  const { id } = useParams();
  const history = useHistory();
  const { season } = useParams();
  const [values, setValues] = useState({});
  const serie = data.find((serie) => serie.id === id);
  const keys = Object.keys(serie.seasons);

  function onChange(key, value) {
    const fields = { [key]: value };
    setValues({ ...values, ...fields });
  }
  const seasonName = keys.filter((key) => key === season);

  async function onUpdate(event) {
    event.preventDefault();
    const newEpisode = {
      ...serie,
      seasons: {
        ...serie.seasons,
        [season]: [...serie.seasons[seasonName], values],
      },
    };
    await updateDocument("shows", newEpisode, serie.id);
    newEpisode.id = serie.id;
    // dispatchCourses({ type: "UPDATE_COURSE", payload: updatedCourse });
    event.target.reset();
    history.push("/");
  }

  const InputFields = fieldsAddEpisode.map((input, index) => (
    <InputField key={index} options={input} onChange={onChange} />
  ));
  return (
    <form onSubmit={onUpdate}>
      {InputFields}
      <button>Add Episode</button>
    </form>
  );
}
