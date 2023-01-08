import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "./App.css";

const App = () => {
  const [countries, setCountries] = useState();
  const navigate = useNavigate();

  const switchPage = (countryName) => {
    navigate(`/country/${countryName}`);
  };
  const searchByName = (name) => {
    if (name !== "") {
      fetch(`https://restcountries.com/v3.1/name/${name}  `)
        .then((response) => response.json())
        .then((data) => setCountries(data));
    }
  };
  const searchByRegion = (region) => {
    console.log(region);
    fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  };
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
      <div className="search">
        <input
          type="search"
          placeholder="Search for a Country"
          onChange={(e) => searchByName(e.target.value)}
        />
        <select
          name="Select by Region"
          id="region"
          placeholder="Filter By Region"
          onChange={(e) => searchByRegion(e.target.value)}
        >
          <option value="" disabled selected>
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      {countries ? <h2>{countries.length} Results</h2> : null}
      {countries ? (
        <div className="card_container">
          {countries.map((country, i) => {
            return (
              <div
                className="card card__light"
                key={i}
                onClick={() => switchPage(country.name.official)}
              >
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
