export default function Row({ data }) {
  const { name, description, imgUrl } = data;
  return (
    <div>
      {name}
      {description}
      <img src={imgUrl} alt="" />
    </div>
  );
}
