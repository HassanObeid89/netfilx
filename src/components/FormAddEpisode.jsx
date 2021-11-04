import { useState } from 'react';
import fieldsAddEpisode from '../data/fields-addEpisode'
import { updateDocument } from '../scripts/firestore';
import InputField from './InputField';

export default function FormAddEpisode({data}) {

    const [values, setValues] = useState({});

    function onChange(key, value) {
      const fields = { [key]: value };
      setValues({ ...values, ...fields });
    }
  
    async function onUpdate(event) {
      event.preventDefault();
      const newEpisode = {
          ...data,
        seasons:{["season1"]:[...data.seasons.season1, values]}
      };
      await updateDocument("shows", newEpisode, data.id);
      newEpisode.id = data.id;
    // dispatchCourses({ type: "UPDATE_COURSE", payload: updatedCourse });
      event.target.reset()
      console.log(newEpisode)
    }

    const InputFields = fieldsAddEpisode.map((input, index) => (
        <InputField key={index} options={input} onChange={onChange} />
      ));
    return (
        <form onSubmit={onUpdate}>
            {InputFields}
            <button>Add Episode</button>
        </form>
    )
}
