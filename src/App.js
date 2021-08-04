import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';



import Header from './components/Header';
import Countries from './components/Countries';
import CountryPage from './components/CountryPage';



const App = () => {

  return (
    <Router>
    <Header />
    <div className="page-wrap">
    <Route exact path="/">
       <Countries />
    </Route>
    <Route path="/countries/:name" children= {<CountryPage/>}></Route>
    </div>
    </Router>
  );
}

export default App;
