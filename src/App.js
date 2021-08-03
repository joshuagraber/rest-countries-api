import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';



import Header from './components/Header';
import Search from './components/Search';
import Countries from './components/Countries';
import CountryPage from './components/CountryPage';



function App() {
  return (
    <Router>
    <Header />
    <div className="page-wrap">
    <Route exact path="/">
        <Search />
       <Countries />
    </Route>
    </div>
    <Route path="/countries/:name" children= {<CountryPage/>}></Route>
    </Router>
  );
}

export default App;
