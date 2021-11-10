//Npm package
import { useState } from "react";
import { useHistory } from "react-router-dom";

//Project files
import { createDocument } from "../scripts/firestore";
import fieldsAddMovie from "../data/fields-addMovie.json";
import InputField from "./InputField";
import InputImage from "./InputImage";
import { useShow } from "../state/ShowsProvider";
import useForm from "../utils/useForm";

export default function FormAddMovie() {
  //Global state
  const { dispatchShows } = useShow();

  //Custom hook
  const {values, setValues,onChange} = useForm();

  const history = useHistory();

  //Methods
  async function onCreate(event) {
    event.preventDefault();
    const newRelease = {
      ...values,
    };
    const id = await createDocument("shows", newRelease);
    newRelease.id = id;
    alert("Movie / Documentary Added!!");
    dispatchShows({ type: "ADD_SHOW", payload: newRelease });
    setValues({})
    history.push("/");
  }

  const InputFields = fieldsAddMovie.map((input, index) => (
    <InputField key={index} options={input} onChange={onChange} />
  ));

  return (
    <form onSubmit={onCreate}>
      <h1>Add Movie Or Documentary</h1>
      <InputImage onChange={onChange} imgUrl={values.imgUrl} />
      <select
        defaultValue="Choose Category"
        required
        onChange={(event) => onChange("category", event.target.value)}
      >
        <option disabled>Choose Category</option>
        <option value="movies">Movie</option>
        <option value="documentaries">Documentary</option>
      </select>
      {InputFields}
      <select
        defaultValue="Choose Maturity Rating"
        required
        onChange={(event) => onChange("maturityRating", event.target.value)}
      >
        <option disabled>Choose Maturity Rating</option>
        <option value="7+">7+</option>
        <option value="16+">16+</option>
        <option value="18+">18+</option>
      </select>
      <button className="primary-button" type="submit">
        Submit
      </button>
    </form>
  );
}
