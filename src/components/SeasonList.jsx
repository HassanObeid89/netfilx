import SeasonCard from "./SeasonCard";
export default function SeasonList({ seasons }) {
  const Season = seasons.map((season) => <SeasonCard season={season} />);

  return <ul>{Season}</ul>;
}
