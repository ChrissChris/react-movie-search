import React, { useState } from "react";

export default function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const query = "Superman";

    const url = `https://api.themoviedb.org/3/search/movie?api_key=af33e7e6a89ca2db62170ccc337eed2d&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <div></div>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Please type movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>

      <div className="card-list">{movies.map((movie) => movie.title)}</div>
    </>
  );
}
