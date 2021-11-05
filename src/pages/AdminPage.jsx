import FormAddSerie from "../components/FormAddSerie";
import ShowCard from "../components/ShowCard"

export default function AdminPage({shows}) {

    const Movies = shows
    .filter((movie) => movie.category === "movies")
    .map((movie, index) => <ShowCard key={index} data={movie} />);

  const Series = shows
    .filter((serie) => serie.category === "series")
    .map((serie, index) => <ShowCard key={index} data={serie} />);

  const Documentaries = shows
    .filter((documentary) => documentary.category === "documentaries")
    .map((documentary, index) => <ShowCard key={index} data={documentary} />);

    return (
        <div>
            <h1>admin page</h1>
            <h2>Movies</h2>
            {Movies}
            <h2>Series</h2>
            {Series}
            <h2>Documentaries</h2>
            {Documentaries}
            <FormAddSerie/>
        </div>
    )
}
