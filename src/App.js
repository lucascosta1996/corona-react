import React from 'react';
import './App.scss';
import RegionContextProvider from './context/RegionContext';
import SearchContainer from './components/SearchContainer/SearchContainer';
import CountriesList from './components/Countries/CountriesList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CountryPage from './components/CountryPage/CountryPage';

function App() {
  return (
    <Router>
      <RegionContextProvider>
       <Route exact path="/">
          <SearchContainer />
          <CountriesList />
       </Route>
       <Route path="/:id" component={ CountryPage } />
      </RegionContextProvider>
    </Router>
  );
};

export default App;
