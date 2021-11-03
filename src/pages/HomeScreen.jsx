import Row from "../components/Row";

export default function HomeScreen({shows}) {

    // const Shows = release.map((show) => <Show key={show.id} data={show} />);
    // const Episodes = release.map((season, index) => (
    //  <Season key={index} data={season.episodes} />
    // ));
    const Movies = shows.filter((movie)=>movie.category === 'movies')
    .map((movie,index)=><Row key={index} data={movie}/>)

    const Series = shows.filter((serie)=>serie.category === 'series')
    .map((serie,index)=><Row key={index} data={serie}/>)

    const Documentaries = shows.filter((documentary)=>documentary.category === 'documentary')
    .map((documentary,index)=><Row key={index} data={documentary}/>)

    return (
        <div>
            <h1>Home screen</h1>
            
            {Series}
            {Movies}
            {Documentaries}
        </div>
    )
}
