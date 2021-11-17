import { Link } from "react-router-dom";

export default function ShowCard({ data }) {
  return (
    <li className="showCard">
      <img src={data.imgUrl} />
      <p>{data.name}</p>
      {data.category === "series" && (
        <Link className="primary-button" to={`/add-season/${data.id}`}>
          Add Season / Episode
        </Link>
      )}
    </li>
  );
}
