import { useState } from "react";

export default function useForm(){
  const [values, setValues] = useState({});

  function onChange(key, value) {
    const fields = { [key]: value };
    setValues(values=>({...values, ...fields}));
  }
  return {values, onChange, setValues};
}
