import signinFields from "../data/signin-fields.json";
import InputField from "../components/InputField";

export default function SignIn() {
  const inputFields = signinFields.map((input) => (
    <InputField options={input} handleChange={handleChange} values={values} />
  ));
  return (
    <div>
      <h1>sign in</h1>
      {inputFields}
    </div>
  );
}
