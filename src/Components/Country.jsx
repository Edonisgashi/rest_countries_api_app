import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Country = () => {
  const [country, setCountry] = useState();
  const { countryName } = useParams();
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => response.json())
      .then((data) => setCountry(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(country);
  console.log(countryName);

  return (
    <div className="wrapper">
      <Link to="/">Go Back</Link>
      {country ? (
        <div className="country_container">
          <div className="country_flag">
            <img src={country[0].flags.png} alt={country[0].name.official} />
          </div>
          <div className="country_text">
            <h1>{country[0].name.official}</h1>
            <p>
              <strong>Native Name : </strong>{" "}
              {Object.values(country[0].name.nativeName)
                .map((el) => el.official)
                .join(" , ")}
            </p>
            <p>
              <strong>Population : </strong>{" "}
              {country[0].population.toLocaleString()}
            </p>
            <p>
              <strong>Region : </strong>
              {country[0].region}
            </p>
            {country[0].subregion ? (
              <p>
                <strong>Sub Region : </strong>
                {country[0].subregion}{" "}
              </p>
            ) : null}
            <p>
              <strong>Capital : </strong>
              {country[0].capital}
            </p>
            <p>
              <strong>Top Level Domain : </strong>
              {country[0].tld}
            </p>

            <p>
              <strong>Currencies : </strong>
              {Object.values(country[0].currencies)
                .map((el) => el.name)
                .join(" , ")}
            </p>
            <p>
              <strong>Languages : </strong>
              {Object.values(country[0].languages).join(" , ")}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Country;
