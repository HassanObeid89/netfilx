import { useState } from "react";
import { useHistory } from "react-router-dom";
import signupFields from "../data/signup-fields";
import InputField from "../components/InputField";
import { createAccount } from "../scripts/authentication";
import { createDocumentWithId } from "../scripts/firestore";
import { useAuth } from "../state/AuthProvider";
import { useUser } from "../state/UserProvider";

export default function SignUp() {
  //Global state
  const { setIsLogged } = useAuth();
  const { dispatchUser } = useUser();
  
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
    const account = await createAccount(values.email, values.password);
    account.isCreated ? onSuccess(account.payload) : onFailure(account.payload);
  }

  async function onSuccess(uid) {
    const newUser = { name: values.name, city: values.city };

    await createDocumentWithId("users", uid, newUser);
    dispatchUser({ type: "SET_USER", payload: newUser });
    setIsLogged(true);
    setValues({});
    location.push("/");
  }

  function onFailure(message) {
    setErrorMessage(message);
  }
  const inputFields = signupFields.map((input) => (
    <InputField options={input} onChange={onChange} values={values} />
  ));
  return (
    <form onSubmit={onSubmit}>
      <h1>sign up</h1>
      {inputFields}
      <button className="primary-button">Sign Up</button>
    </form>
  );
}
