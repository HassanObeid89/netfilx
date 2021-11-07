import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDocument } from "../scripts/firestore";
import fieldsAddMovie from "../data/fields-addMovie.json";
import InputField from "./InputField";

export default function FormAddMovie() {
  const [values, setValues] = useState({});
  const history = useHistory();
  function onChange(key, value) {
    const fields = { [key]: value };
    setValues({ ...values, ...fields });
  }

  async function onCreate(event) {
    event.preventDefault();
    const newRelease = {
      ...values,
    };
    const id = await createDocument("shows", newRelease);
    newRelease.id = id;
    alert("sucess");
    event.target.reset();
    history.push("/");
  }

  const InputFields = fieldsAddMovie.map((input, index) => (
    <InputField key={index} options={input} onChange={onChange} />
  ));

  return (
    <form onSubmit={onCreate}>
      <h1>Add Movie Or Documentary</h1>
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
      <button type="submit">Submit</button>
    </form>
  );
}
