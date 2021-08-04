import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';

const countriesUrl = 'https://restcountries.eu/rest/v2/all';

const Countries = () => {
  
  const [countries, setCountries] = useState([]);
   const setData = (c) => {
    setCountries(c);
  }

  useEffect(() => {
      const fetchData = async (url) => {
      const response = await fetch(url);
      const countries = await response.json();
      setData(countries);
    }
    fetchData(countriesUrl)
  }, []);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    
    <>
    <Search dataReset={(arr) => setData(arr)}/>
    <section className="flag-container">
    {countries.map((country) => {
      const {name, region, population, capital, flag, numericCode} = country;

      return (
        
          <article className="card-wrap" key={numericCode}>
            <div className="card">
              <img className="flag-img" src={flag} alt={name} />
              <div className="country-info">
                <h3 className="country-name">{name}</h3>
                <h4>Population: <span>{numberWithCommas(population)}</span></h4>
                <h4>Region: <span>{region}</span></h4>
                <h4>Capital: <span>{capital}</span></h4>
              </div>
              <div className="btn-div">
              <Link to={`/countries/${name}`} className="btn learn-btn">Learn More</Link>
            </div>
            </div>
          </article>
        
      )
    })}
    </section>
    </>
  )
}

export default Countries



// const removeCountry = (numericCode) => {
//   const newCountries = countries.filter((country) =>
//     country.numericCode !== numericCode)
//     if (newCountries !== countries) {
//       setCountries(newCountries);
//     }
// }
