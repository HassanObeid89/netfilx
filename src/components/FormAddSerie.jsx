import { useState } from "react";
import InputField from './InputField'
import fieldsAddSerie from '../data/fields-addSerie.json';
import { createDocument } from "../scripts/firestore";

export default function FormAddSerie() {
  const [values, setValues] = useState({});

  function onChange(key, value) {
    const fields = { [key]: value };
    setValues({ ...values, ...fields });
  }

  async function onCreate(event) {
    event.preventDefault();
    const newRelease = {
        category:'series',
      ...values,
      seasons: []
    };
    const id = await createDocument("shows", newRelease);
    newRelease.id = id;
    alert('Serie added')
    event.target.reset()
  }

  const InputFields = fieldsAddSerie.map((input, index) => (
    <InputField key={index} options={input} onChange={onChange} />
  ));

  return (
    <form onSubmit={onCreate}>
      <h1>Add Serie</h1>
      {InputFields}
      <select
        defaultValue='Choose Maturity Rating'
        required
        onChange={(event) => onChange("maturityRating", event.target.value)}
      >
        <option disabled>
          Choose Maturity Rating
        </option>
        <option value="7+">7+</option>
        <option value="16+">16+</option>
        <option value="18+">18+</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
