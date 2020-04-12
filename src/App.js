import React from 'react';
import logo from './logo.svg';
import './App.scss';
import RegionContextProvider from './context/RegionContext';
import SearchContainer from './components/SearchContainer/SearchContainer';
import CountriesList from './components/Countries/CountriesList';

function App() {
  return (
    <RegionContextProvider>
      <SearchContainer />
      <CountriesList />
    </RegionContextProvider>
  );
}

export default App;
