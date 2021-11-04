import { useState } from 'react';
import FormAddSeason from './FormAddSeason'
export default function ShowCard({ data }) {
    const [season, setSeason] = useState([]);
    // const Seasons = seasons.map((season)=>season)
  return (
    <li>
      {data.name}
      {data.category === "series" && 
   
      <FormAddSeason data={data} season={season} setSeason={setSeason} />
      }
    </li>
  );
}
