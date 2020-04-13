import React from 'react';
import logo from './logo.svg';
import './App.scss';
import RegionContextProvider from './context/RegionContext';
import SearchContainer from './components/SearchContainer/SearchContainer';
import CountriesList from './components/Countries/CountriesList';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <RegionContextProvider>
       <Route path="/">
          <SearchContainer />
          <CountriesList />
       </Route>
      </RegionContextProvider>
    </Router>
  );
}

export default App;
