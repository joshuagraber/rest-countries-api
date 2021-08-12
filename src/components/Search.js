import React, { useState, useEffect, useRef, useCallback } from 'react';

const Search = ({ setCountries, countriesUrl }) => {
  const [ searchInput, setSearchInput ] = useState('');
  const [ selectorInput, setSelectorInput ] = useState('');
  const searchRef = useRef();
  const selectorRef = useRef();

  // State updaters
  const onSearchChange = (e) => {
    setSearchInput(e.target.value);
  }
  const onSelectorChange = (e) => {
    e.preventDefault();
    setSelectorInput(e.target.id);
  }

  // similar functions, routed to searchSort or selectorSort depending on input type
  const searchSort = useCallback((countriesToFilter) => {
      const searchCountries = countriesToFilter.filter(country => {
      if (country.name.toLowerCase().includes(searchInput.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    })
      setCountries(searchCountries);
  }, [searchInput, setCountries])

  const selectorSort = useCallback((countriesToFilter) => {
      if (selectorInput === '') return;
      const selectedCountries = countriesToFilter.filter((country) => {
        if (country.region.toLowerCase() === selectorInput) {
          return true;
        } else {
          return false;
        }
      })
    setCountries(selectedCountries);
  }, [selectorInput, setCountries])

  
  // Routes data to searchSort or selectorSort based on input
  const router = useCallback((countriesToFilter) => {
    if (document.activeElement === searchRef.current) {
      searchSort(countriesToFilter);
    } 
    if (selectorRef) {
      selectorSort(countriesToFilter);
    }
  }, [searchSort, selectorSort])


  // Re-calls API on search/sort, passes data to router
  useEffect(() => {
    const getFreshData = async () => { 
      const response = await fetch(countriesUrl);
      const countriesReset = await response.json();
      router(countriesReset);
    }
    getFreshData();
  }, [searchInput, selectorInput, countriesUrl, router]);

  


   //Displays sorting menu 
   const displaySort = () => {
    const options = document.querySelector('.options');
    options.classList.toggle('show');
  }
  
  

  return (
    <>
    <section className="search-bar">
      <div className="search-wrap" onChange={onSearchChange}>
        <form action="#" className="form-control input">
          <input type="search" name="search" id="search" ref={searchRef} placeholder="Search for a country"/>
        </form>

        <div className="select-menu" onClick={displaySort}>
        <form action="#" className="options" id="options" ref={selectorRef} onClick={onSelectorChange}>
          <input type="submit" className="dropdown-selector" id="africa" value="Africa" />
          <input type="submit" className="dropdown-selector" id="americas" value="Americas" />
          <input type="submit" className="dropdown-selector" id="asia" value="Asia" />
          <input type="submit" className="dropdown-selector" id="europe" value="Europe" />
          <input type="submit" className="dropdown-selector" id="oceania" value="Oceania" />
        </form>
          <div id="select" className="select input">
            Filter by Region <i className="fas fa-caret-down"></i>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Search

