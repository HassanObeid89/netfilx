import RowCard from "./RowCard";

export default function Row({ data, setModal }) {
  const Shows = data.map((show, index) => (
    <RowCard setModal={setModal} key={index} show={show} />
  ));
  return (
    <div className="row-posters">
      <h2>{data[0].category}</h2>
      <ul>{Shows}</ul>
    </div>
  );
}
