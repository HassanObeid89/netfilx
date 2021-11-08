// Project files
import Placeholder from "../assets/images/placeholder-image.png";
import { uploadImage } from "../scripts/cloudStorage";

export default function InputImage({ onChange, imgUrl }) {
  const image = imgUrl === undefined ? Placeholder : imgUrl;

  // Methods
  async function onImageChange(event) {
    const imgName = event.target.files[0].name.split(".")[0];
    const image_url = await uploadImage(event, imgName);
    onChange("imgUrl", image_url);
  }

  return (
    <fieldset className="input-image">
      <label className="image-chooser">
        <span>Choose Image</span>
        <input onChange={(event) => onImageChange(event)} type="file" />
        <img src={image} alt="" />
      </label>
    </fieldset>
  );
}
