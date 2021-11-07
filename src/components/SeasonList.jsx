import SeasonCard from "./SeasonCard";
export default function SeasonList({ seasons, serie }) {
  const keys = Object.keys(seasons);
  const season = keys.map((season) => (
    <SeasonCard season={season} serie={serie} />
  ));
  return <ul>{season}</ul>;
}
