import Banner from "../components/Banner";
import Row from "../components/Row";
import { useShow } from "../state/ShowsProvider";

export default function HomeScreen({setModal}) {
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
      <Row setModal={setModal} data={Series}/>
      <Row setModal={setModal} data={Movies}/>
      <Row setModal={setModal} data={Documentaries}/>
      </section>
    </div>
  );
}
