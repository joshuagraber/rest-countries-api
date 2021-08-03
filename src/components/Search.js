import React from 'react';

const Search = () => {
  const displaySort = () => {
    const options = document.querySelector('.options');
    options.classList.toggle('show');
  }

  return (
    <>
    <section className="search-bar">
      <div className="search-wrap">
        <form action="#" className="form-control input">
          <input type="search" name="search" id="search" placeholder="Search for a country" />
        </form>

        <div className="select-menu" onClick={displaySort}>
        <div className="options">
          <span id="africa">Africa</span>
          <span id="america">America</span>
          <span id="asia">Asia</span>
          <span id="europe">Europe</span>
          <span id="oceania">Oceania</span>
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