//Npm packge
import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

//Project file
import fieldsAddEpisode from "../data/fields-addEpisode";
import { updateDocument } from "../scripts/firestore";
import { useShow } from "../state/ShowsProvider";
import InputField from "./InputField";

export default function FormAddEpisode() {
  //Global state
  const { shows, dispatchShows } = useShow();

  //properties
  const { id } = useParams();
  const history = useHistory();
  const { season } = useParams();
  const [values, setValues] = useState({});

  const serie = shows.find((serie) => serie.id === id);
  const keys = Object.keys(serie.seasons);
  const seasonName = keys.filter((key) => key === season);

  //Methods
  function onChange(key, value) {
    const fields = { [key]: value };
    setValues({ ...values, ...fields });
  }

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
    dispatchShows({ type: "UPDATE_SHOW", payload: newEpisode });
    event.target.reset();
    setValues({});
    history.goBack();
  }

  const InputFields = fieldsAddEpisode.map((input, index) => (
    <InputField key={index} options={input} onChange={onChange} />
  ));

  return (
    <form onSubmit={onUpdate}>
      <h1>Add Episode</h1>
      {InputFields}
      <button className="primary-button">Add Episode</button>
    </form>
  );
}
