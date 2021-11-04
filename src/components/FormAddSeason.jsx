import { useState,useRef } from "react";
import fieldsAddEpisode from "../data/fields-addEpisode.json";
import InputField from "./InputField";
export default function FormAddSeason({
  seasons,
  setSeasons,
  episodes,
  setEpisodes,
}) {
  const [season, setSeason] = useState("");
  const [episode, setEpisode] = useState({});
    const seasonRef = useRef(null)

  function onChange(key, value) {
    const episodeFields = { [key]: value };
    setEpisode({ ...episode, ...episodeFields });
    console.log(episode)
  }
console.log(episode)

  function handleClick(event) {
    event.preventDefault();
    setEpisodes([...episodes, { ...episode }]);
    setEpisode({});
  }

  function addSeason(event) {
    event.preventDefault();
    setSeasons([...seasons, season]);
  }
  const InputFields = fieldsAddEpisode.map((input, index) => (
    <InputField key={index} options={input} onChange={onChange} />
  ));

  const Episodes = episodes.map((episode, index) => (
    <li key={index}>{episode.name}</li>
  ));

  const Seasons = seasons.map((season, index) => (
    <option key={index}>
      {season}
    </option>
  ));
  return (
    <fieldset>
      <label>
        <span>Season</span>
        <input
          type="text"
          placeholder="season 1"
          value={season}
          onChange={(event) => setSeason(event.target.value)}
        />
      </label>
      <button onClick={(event) => addSeason(event)}>Add Season</button>
      <select
        required
        ref={seasonRef}
        onChange={() => onChange("season", seasonRef.current.value)}
      >
        {Seasons}
      </select>
      {InputFields}
      <button onClick={(event) => handleClick(event)}>Add Episodes</button>
      {Episodes}
    </fieldset>
  );
}
