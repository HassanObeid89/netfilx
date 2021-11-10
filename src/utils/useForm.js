import { useState } from "react";

export default function useForm() {
  const [state, setstate] = useState({});
  function onChange(key, value) {
    const fields = { [key]: value };
    setstate(...state, ...fields);
  }
  return [state, onChange, setstate];
}
