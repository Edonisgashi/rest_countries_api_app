import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import { Link } from "react-router-dom";
import "./App.css";

const App = () => {
  const [countries, setCountries] = useState();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(countries);
  return (
    <>
      <Header />
      {countries ? (
        <div className="card_container">
          {countries.map((country, i) => {
            return (
              <div className="card" key={i}>
                <div className="card__img">
                  <img src={country.flags.png} alt={country.name.official} />
                </div>
                <div className="card__text">
                  <h1>{country.name.official}</h1>
                  <p>
                    <strong>Population : </strong>{" "}
                    {country.population.toLocaleString()}
                  </p>
                  <p>
                    <strong>Region : </strong>
                    {country.region}
                  </p>
                  <p>
                    <strong>Capital : </strong>
                    {country.capital}
                  </p>
                  <Link to={`/country/${country.name.official}`}>
                    Learn More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
      )
    </>
  );
};
export default App;
