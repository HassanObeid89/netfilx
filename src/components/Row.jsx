export default function Row({ data }) {
  const { name, description, imgUrl, videoLink } = data;
  const baseUrl = "https://www.youtube.com/watch?";
  return (
    <li className='row-posters'>
      <img src={imgUrl} alt="" />
    </li>
  );
}
