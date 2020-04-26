import React, { lazy, Suspense } from 'react';
import AddToHomescreen from 'react-add-to-homescreen';
import './App.scss';
import RegionContextProvider from './context/regionContext';
import FilterContainer from './components/FilterContainer/FilterContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CountryPage from './components/CountryPage/CountryPage';
import Loading from './components/Loading/Loading';
import ErrorBoundary from './components/ErrorBoundaries/ErrorBoundaries';
import Header from './components/Header/Header';

const CountriesListLazy = lazy( () => import( './components/Countries/CountriesList' ) );

function App() {
  const handleAddToHomescreenClick = () => {
    alert(`
      1. Open Share menu
      2. Tap on "Add to Home Screen" button`);
  };

  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={ <Loading /> }>
          <RegionContextProvider>
            <Header />
            <Route exact path="/">
              <FilterContainer />
              <CountriesListLazy />
            </Route>
            <Route path="/:id" component={ CountryPage } />
          </RegionContextProvider>
        </Suspense>
        <AddToHomescreen onAddToHomescreenClick={handleAddToHomescreenClick} />
      </ErrorBoundary>
    </Router>
  );
};

export default App;
