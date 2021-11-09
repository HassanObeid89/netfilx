import Episodes from "./Episodes";

export default function Seasons({ data }) {
  const FilteredEpisodes = data
    .filter((episode) => episode.season === "season1")
    .map((episode, index) => <Episodes key={index} data={episode} />);

  return (
    <div>
      <h1>Episodes</h1>
      <ol>{FilteredEpisodes}</ol>
    </div>
  );
}
