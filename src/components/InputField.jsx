import { useRef } from "react";

export default function InputField({ options, onChange }) {
  const { label, placeholder, key, type } = options;
  const inputReference = useRef(null);

  return (
    <fieldset>
      <input
        type={type}
        ref={inputReference}
        placeholder={placeholder}
        onChange={() => onChange(key, inputReference.current.value)}
      />
      <label>
        <span>{label}</span>
      </label>
    </fieldset>
  );
}
