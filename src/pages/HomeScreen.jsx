import Banner from "../components/Banner";
import Row from "../components/Row";
import { useShow } from "../state/ShowsProvider";

export default function HomeScreen() {
 const {shows} = useShow()
  const Movies = shows
    .filter((movie) => movie.category === "movies")

  const Series = shows
    .filter((serie) => serie.category === "series")
    
  const Documentaries = shows
    .filter((documentary) => documentary.category === "documentaries")
    

  return (
    <div className='home_page'>
      <Banner series={Series}/>
      <section className='row'>
      <Row data={Series}/>
      <Row data={Movies}/>
      <Row data={Documentaries}/>
      </section>
    </div>
  );
}
