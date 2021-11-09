import { Link } from "react-router-dom";

export default function ShowCard({ data }) {
  return (
    <li>
      {data.name}
      {data.category === "series" && (
        <Link to={`/add-season/${data.id}`}>Add Season</Link>
      )}
    </li>
  );
}
