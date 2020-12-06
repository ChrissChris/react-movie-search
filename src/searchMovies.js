import React from "react";

export default function SearchMovies() {
  return (
    <form className="form">
      <div></div>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="Please type movie..."
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
