import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <div className="error_wrapper">
      <p>Oppss Page not found </p>
      <Link to="/">Go Home</Link>
    </div>
  );
}
