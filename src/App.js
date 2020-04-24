import React, { lazy, Suspense } from 'react';
import './App.scss';
import RegionContextProvider from './context/RegionContext';
import FilterContainer from './components/FilterContainer/FilterContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CountryPage from './components/CountryPage/CountryPage';
import Loading from './components/Loading/Loading';

const CountriesListLazy = lazy( () => import( './components/Countries/CountriesList' ) );

function App() {
  return (
    <Router>
      <Suspense fallback={ <Loading /> }>
        <RegionContextProvider>
          <Route exact path="/">
            <FilterContainer />
            <CountriesListLazy />
          </Route>
          <Route path="/:id" component={ CountryPage } />
        </RegionContextProvider>
      </Suspense>
    </Router>
  );
};

export default App;
