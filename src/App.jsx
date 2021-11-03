import { useState, useCallback, useEffect } from "react";
import { createDocument, getCollection } from "./scripts/firestore";
import HomeScreen from "./pages/HomeScreen";
export default function App() {
  const [shows, setShows] = useState([]);
  const [status, setStatus] = useState(0);

  const fetchShows = useCallback(async (path) => {
    try {
      const shows = await getCollection(path);
      setShows(shows);
      // dispatchCourses({ type: "SET_COURSES", payload: courses });
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, []);
  useEffect(() => {
    fetchShows("shows");
  }, [fetchShows]);

  async function onCreate(event) {
    event.preventDefault();
    const newRelease = {
      name: "Army Of Thieves",
      description: "Is this prequel to Army of the death...",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/43/ArmyOfThievesTeaserPoster.jpg/220px-ArmyOfThievesTeaserPoster.jpg",
      maturityRating: "16+",
      category:'movies',
      // episodes: [
      //   {
      //     name: "Pilot",
      //     description: "A charming first encounter quickly turns into...",
      //     videoId: "b08pqu5vh3U",
      //     season: "season1",
      //   },
      //   {
      //     name: "The last nice guy in new york",
      //     description:
      //       "As beck deals with unwanted advances from her advisor...",
      //     videoId: "StuFfLouaNw",
      //     season: "season1",
      //   },
      //   {
      //     name: "testseason2.1",
      //     description: "A charming first encounter quickly turns into...",
      //     videoId: "b08pqu5vh3U",
      //     season: "season2",
      //   },
      //   {
      //     name: "testseason2.2",
      //     description:
      //       "As beck deals with unwanted advances from her advisor...",
      //     videoId: "StuFfLouaNw",
      //     season: "season2",
      //   },
      // ],
    };
    const id = await createDocument("shows", newRelease);
    newRelease.id = id;
  }

  return (
    <div className="App">
      <h1>Netflix</h1>
      <HomeScreen shows={shows}/>
      <button onClick={onCreate}>New Release</button>
    </div>
  );
}
