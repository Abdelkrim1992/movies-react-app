import "./App.css";
import Header from "./components/Header";
import TopMovies from "./components/TopMovies";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import { Client } from 'appwrite';
import updateSearchCount from './appwrite';

const client = new Client();
client.setProject('67a7a203003485aedea4');

function App() {
  const [searchMovie, setSearchMovie] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const API_BASE_URL = import.meta.env.VITE_MOVIES_URL;
  const VITE_MOVIES_API_KEY = import.meta.env.VITE_MOVIES_API_KEY;

  const ApiOptions = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${VITE_MOVIES_API_KEY}`,
    },
  };

  const fetchData = async (query = "") => {
    setLoading(true);

    try {
      const API_MOVIES = query
        ? `${API_BASE_URL}/search/movie?query= ${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie`;
      const response = await fetch(API_MOVIES, ApiOptions);

      if (!response.ok) {
        throw new Error(`Failed to fetch data`);
      }

      const data = await response.json();
      setMovies(data.results || []);
    } catch (error) {
      console.log("error in fetch", error);
      setErrorMessage("error to loading data , please try again");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(searchMovie);

  }, [searchMovie]);

  return (
    <>
      <div className="wrapper">
        <Header />
        <Search search={searchMovie} setSearch={setSearchMovie} />
        <TopMovies
          movies={movies}
          isLoading={isLoading}
          errorMessage={errorMessage}
        />
      </div>
    </>
  );
}

export default App;
