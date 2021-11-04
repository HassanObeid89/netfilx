import { useState } from 'react';
import FormAddEpisode from './FormAddEpisode';
import FormAddSeason from './FormAddSeason'
export default function ShowCard({ data }) {
    const [season, setSeason] = useState([]);

  return (
    <li>
      {data.name}
      {data.category === "series" && 
<>
      <FormAddSeason data={data} season={season} setSeason={setSeason} />
      <FormAddEpisode data={data}/>
</>
      }
    </li>
  );
}
