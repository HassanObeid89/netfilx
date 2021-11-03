import { useState } from "react";
import fieldsAddShow from "../data/fields-addShow.json";
import InputField from "./InputField";
import FormAddSeason from "./FormAddSeason";

export default function FormAddShow() {
  const [values, setValues] = useState({});

  function onChange(key, value) {
    const imgField = { [key]: value };
    setValues({ ...values, ...imgField });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(values);
  }

  const InputFields = fieldsAddShow.map((input, index) => (
    <InputField key={index} options={input} onChange={onChange} />
  ));

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add show form</h1>
      <select
        required
        onChange={(event) => onChange("category", event.target.value)}
      >
        <option value="" selected disabled >Choose Category</option>
        <option value="serie">Serie</option>
        <option value="movie">Movie</option>
        <option value="documentary">Documentary</option>
      </select>
      {InputFields}
      <label>Choose maturity</label>
      <select
      required
        onChange={(event) => onChange("maturityRating", event.target.value)}
      >
        <option value="" selected disabled >Choose Maturity Rating</option>
        <option value="7+">7+</option>
        <option value="16+">16+</option>
        <option value="18+">18+</option>
      </select>
      <FormAddSeason />
      <button type="submit">Submit</button>
    </form>
  );
}
