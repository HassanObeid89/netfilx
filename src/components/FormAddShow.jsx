import { useState } from 'react';
import fieldsAddShow from '../data/fields-addShow.json'
import InputField from './InputField'

export default function FormAddShow() {

  const [values, setValues] = useState({});

  function onChange(key, value) {
    const imgField = { [key]: value };
    setValues({ ...values, ...imgField });
  }

  function handleSubmit(event){
      event.preventDefault()
      console.log(values)
  }

  const InputFields = fieldsAddShow.map((input,index) => (
    <InputField key={index} options={input} onChange={onChange} />
  ));

  return (
    <div>
      <h1>Add show form</h1>
      <form onSubmit={handleSubmit}>
        <label>Choose Category</label>
        <select id="categories" name="category" onChange={(event)=>onChange('category', event.target.value)}>
          <option value="serie">Serie</option>
          <option value="movie">Movie</option>
          <option value="documentary">Documentary</option>
        </select>
        {InputFields}
        <label>Choose maturity</label>
        <select id="maturity" name="maturityRating" onChange={(event)=>onChange('maturityRating', event.target.value)}>
          <option value="7+">7+</option>
          <option value="16+">16+</option>
          <option value="18+">18+</option>
        </select>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
