import RowCard from "./RowCard";

export default function Row({ data, setMiniModal }) {
  const Shows = data.map((show, index) => (
    <RowCard setMiniModal={setMiniModal} key={index} show={show} />
  ));
  return (
    <div className="row-posters">
      <h2>{data[0].category}</h2>
      <ul>{Shows}</ul>
    </div>
  );
}
