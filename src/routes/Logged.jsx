//NPM packages
import { Route } from "react-router-dom";
import FormAddSeason from "../components/FormAddSeason";

//Project files
import AdminPage from "../pages/AdminPage";

export default function Logged({shows}) {
  
  const AddSeason = shows.filter((serie)=>serie.category==='series')

  return (
    <>
      <Route path="/" exact ><AdminPage shows={shows}/></Route>
      
      <Route path='/add-season/:id'><FormAddSeason data={AddSeason}/></Route>
    </>
  );
}
