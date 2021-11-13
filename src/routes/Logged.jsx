//Npm package
import { useState } from "react";
import { Route } from "react-router-dom";

//Project files
import AdminPage from "../pages/AdminPage";
import FormAddSerie from "../components/FormAddSerie";
import HomeScreen from "../pages/HomeScreen";
import FormAddSeason from "../components/FormAddSeason";
import FormAddEpisode from "../components/FormAddEpisode";
import FormAddMovies from "../components/FormAddMovie";
import NavBar from "../components/NavBar";
import ModalContainer from "../components/ModalContainer";
import VideoPlayer from "../components/VideoPlayer";

export default function Logged() {
  
  return (
    <>
      <NavBar/>
      <Route path="/" exact component={AdminPage} />
      <Route path="/add-episode/:id/:season" component={FormAddEpisode} />
      <Route path="/add-season/:id" component={FormAddSeason} />
      <Route path="/add-serie" component={FormAddSerie} />
      <Route path="/add-movie" component={FormAddMovies} />
      <Route path="/home-page" component={HomeScreen}/>
      <Route path='/watch/:id' component={VideoPlayer}/>
      
    </>
  );
}
