//Npm package
import { useState } from "react";
import { useHistory } from "react-router-dom";

//Project files
import { getDocument } from "../scripts/firestore";
import { signIn } from "../scripts/authentication";
import signinFields from "../data/signin-fields.json";
import InputField from "../components/InputField";
import { useUser } from "../state/UserProvider";
import { useAuth } from "../state/AuthProvider";

export default function SignIn() {
  //Global state
  const { dispatchUser } = useUser();
  const { setIsLogged } = useAuth();

  //Local State
  const [values, setValues] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const location = useHistory();

  //Methods
  function onChange(key, value) {
    const fields = { [key]: value };
    setValues({ ...values, ...fields });
  }

  async function onSubmit(event) {
    event.preventDefault();
    setErrorMessage("");
    const account = await signIn(values.email, values.password);

    account.isLogged ? onSuccess(account.payload) : onFailure(account.payload);
  }

  async function onSuccess(uid) {
    const document = await getDocument("users", uid);

    dispatchUser({ type: "SET_USER", payload: document });
    setIsLogged(true);
    location.push("/");
  }

  function onFailure(message) {
    setErrorMessage(message);
  }

  const inputFields = signinFields.map((input, index) => (
    <InputField
      key={index}
      options={input}
      onChange={onChange}
      values={values}
    />
  ));
  return (
    <form onSubmit={onSubmit}>
      <h1>sign in</h1>
      {inputFields}
      {errorMessage}
      <button className="primary-button">Sign In</button>
    </form>
  );
}
