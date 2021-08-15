import React, { useState } from "react";
import "./styles.css";
import movieDB from "./movies";

export default function App() {
  const [genre, setGenere] = useState("thriller");

  const genreClickhandler = (genre) => {
    setGenere(genre);
  };

  return (
    <div className="App">
      <header>
        <div className="container">
          <h1 className="header__title">🎥 goodmovies</h1>
          <p className="header__text">
            These are my favourite movies. Select a genre to get started.
          </p>
          <div className="btn-container">
            {Object.keys(movieDB).map((genre) => {
              return (
                <button
                  className="btn"
                  onClick={() => genreClickhandler(genre)}
                  key={genre}
                >
                  {genre}
                </button>
              );
            })}
          </div>
        </div>
      </header>
      <hr />
      <section className="container">
        <ul>
          {movieDB[genre].map((movie) => {
            return (
              <li key={movie.name} className="card">
                <h3 className="card__title">{movie.name}</h3>
                <p className="card__rating">IMDb: {movie.imdb}</p>
                <p className="card__text">{movie.description}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
