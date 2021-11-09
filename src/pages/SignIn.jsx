import { useState } from "react";
import { useHistory } from "react-router-dom";
import { getDocument } from "../scripts/firestore";
import { signIn } from "../scripts/authentication";
import signinFields from "../data/signin-fields.json";
import InputField from "../components/InputField";
import { useUser } from "../state/UserProvider";
import { useAuth } from "../state/AuthProvider";
export default function SignIn() {

  const location = useHistory();
  const [values, setValues] = useState({})
  const [errorMessage, setErrorMessage] = useState("");
  const { dispatchUser } = useUser();
  const { setIsLogged } = useAuth();

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
    console.log(document)

  }

  function onFailure(message) {
    setErrorMessage(message);
  }

  const inputFields = signinFields.map((input) => (
    <InputField options={input} onChange={onChange} values={values}/>
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
