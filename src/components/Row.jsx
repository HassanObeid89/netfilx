export default function Row({ data }) {
  const { name, description, imgUrl, videoLink } = data;
  const baseUrl = "https://www.youtube.com/watch?";
  return (
    <div>
      {name}
      {description}
      <img src={imgUrl} alt="" />
      <a target="_blank" href={`${baseUrl}${videoLink}`}>
        Play
      </a>
    </div>
  );
}
