import React, { useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryPage = () => {
  const [country, setCountry] = useState([]);
  const {name} = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
      const country = await response.json();
      setCountry(country);
    };
    fetchData();
  }, [name]);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <>
    <div className="det-page-wrap">
      <div className="icon-wrap">
        <Link to="/" className="btn btn-light"><i className="fas fa-arrow-left"></i>Back Home</Link>
      </div>
      <section className="det-country wrap">
      
        {country.map((c) => {
          const {numericCode, flag, name, nativeName, population, region, subregion, borders, capital, topLevelDomain, currencies, languages} = c;
          
          return (
            <article className="det-country" key={numericCode}>
              <div className="det-flag">
                <img src={flag} alt={name} />
              </div>
              <div className="det-country-details">
                <div className="details-1">
                  <h2>{name}</h2>
                  <h5>Native Name: <span>{nativeName}</span></h5>
                  <h5>Population: <span>{numberWithCommas(population)}</span></h5>
                  <h5>Region: <span>{region}</span></h5>
                  <h5>Sub-region: <span>{subregion}</span></h5>
                  <h5>Top Level Domain: <span>{topLevelDomain}</span></h5>
                </div>
                <div className="details-2">
                  <h5>Currencies: <span>{currencies[0].name}</span></h5>
                  <h5>Languages: <span>{languages[0].name}</span></h5>
                  <h5>Capital <span>{capital}</span></h5>
                </div>
                <div className="details-3">
                  <h3>Border Countries: </h3>
                  <span className="border-countries"><ul>{borders.map((border) => {
                    return (
                        <li>{border}</li>
                    )
                  })}
                  </ul>
                  </span>
                </div>
                

              </div>
            </article>
          )
        })}
      </section>
    </div>
    </>
  )
}

export default CountryPage