//Npm package
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

//Project files
import { getDocument } from "../scripts/firestore";
import { signIn } from "../scripts/authentication";
import signinFields from "../data/signin-fields.json";
import InputField from "../components/InputField";
import { useUser } from "../state/UserProvider";
import { useAuth } from "../state/AuthProvider";
import logo from "../assets/images/netlogo.png";
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
    console.log(document);
    await dispatchUser({ type: "SET_USER", payload: document });
    document.role === "admin"
      ? location.push("/admin-page")
      : location.push("/");
    setIsLogged(true);
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
    <div className="loginScreen">
      <div className="login_background">
        <img className="login_logo" src={logo} />
        <div className="login_gradient" />
      </div>
      <section className="login_body">
        <h1>Sign In</h1>
        <form onSubmit={onSubmit}>
          {inputFields}
          {errorMessage}
          <button className="primary-button">Sign In</button>
        </form>
        <section className="signup">
          <p>New to Netflix?</p>
          <Link to="/sign-up">Sign up now</Link>
        </section>
      </section>
    </div>
  );
}
