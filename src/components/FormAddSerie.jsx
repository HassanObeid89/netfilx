//Project files
import InputField from "./InputField";
import fieldsAddSerie from "../data/fields-addSerie.json";
import { createDocument } from "../scripts/firestore";
import { useHistory } from "react-router-dom";
import InputImage from "./InputImage";
import { useShow } from "../state/ShowsProvider";
import useForm from "../utils/useForm";

export default function FormAddSerie() {
  //Global state
  const { dispatchShows } = useShow();

  //Custom hook
  const { values, setValues, onChange } = useForm();

  const history = useHistory();

  //Methods
  async function onCreate(event) {
    event.preventDefault();
    const newRelease = {
      category: "series",
      ...values,
      seasons: {},
    };
    const id = await createDocument("shows", newRelease);
    newRelease.id = id;
    dispatchShows({ type: "ADD_SHOW", payload: newRelease });
    alert("Serie added");
    event.target.reset();
    history.push("/");
    setValues({});
  }

  const InputFields = fieldsAddSerie.map((input, index) => (
    <InputField
      key={index}
      options={input}
      onChange={onChange}
    />
  ));

  return (
    <form onSubmit={onCreate}>
      <h1>Add Serie</h1>
      <InputImage onChange={onChange} imgUrl={values.imgUrl} />
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
