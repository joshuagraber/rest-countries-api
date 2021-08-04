import React from 'react';

const url = 'https://restcountries.eu/rest/v2/all';

const Search = (props) => {
  const {dataReset} = props;
  
  
    //Displays sorting menu 
    
    const displaySort = () => {
      const options = document.querySelector('.options');
      options.classList.toggle('show');
    }

    // Filters countries based on search bar and selector input
    const filterCountries = (e, newCountries) => {
      if (e.target.id === 'search'){  //For search inputs
        const value = e.target.value.toLowerCase();
        const filteredCountries = newCountries.filter((country) => {
          if (country.name.toLowerCase().includes(value)) {
            return true;
          } else {
            return false;
          }
        })
        dataReset(filteredCountries);
      } else if (e.target.classList.contains('dropdown-selector')) { //For selector bar inputs
        const id = e.target.id;
        const selectedCountries = newCountries.filter((country) => {
          if (country.region.toLowerCase() === id) {
            return true;
          } else {
            return false;
          }
        })
        dataReset(selectedCountries);
      }
    }

    const getNewCountries = async (e) => {  //Same async function from Countries page (on refactor, try to leave it there and call it here)
      const response = await fetch(url);
      const newCountries = await response.json();
      filterCountries(e, newCountries);
    }

    
    window.addEventListener('DOMContentLoaded', () => { //Event listeners added on elements after page load
      const searchBar = document.getElementById('search');
      const dropdowns = document.querySelectorAll('.dropdown-selector');

      searchBar.addEventListener('input', (e) => {
        getNewCountries(e);
      });

      dropdowns.forEach(dropdown => dropdown.addEventListener('click', (e) => {
        getNewCountries(e);
      }));
    })
  

  return (
    <>
    <section className="search-bar">
      <div className="search-wrap">
        <form action="#" className="form-control input">
          <input type="search" name="search" id="search" placeholder="Search for a country" />
        </form>

        <div className="select-menu" onClick={displaySort}>
        <div className="options">
          <span className="dropdown-selector" id="africa">Africa</span>
          <span className="dropdown-selector" id="americas">Americas</span>
          <span className="dropdown-selector" id="asia">Asia</span>
          <span className="dropdown-selector" id="aurope">Europe</span>
          <span className="dropdown-selector" id="oceania">Oceania</span>
        </div>
          <select name="select" id="select" className="select input">
            <option value="Filter by Region">Filter by Region</option>
          </select>
        </div>
      </div>
    </section>
    </>
  )
}

export default Search