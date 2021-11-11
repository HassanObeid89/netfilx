import RowCard from "./RowCard";

export default function Row({ data }) {
  const Shows = data.map((show, index) => <RowCard key={index} show={show} />);
  console.log(data[0].category)
  return (
    <div className='row-posters'>
      <h2>{data[0].category}</h2>
      <ul>
      {Shows}
      </ul>
    </div>
  );
}
