import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Country from './routes/country';
import Home from './routes/home';

import { getData } from './utils/data.utils';

import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
      const fetchCountries = async () => {
          const countryData = await getData('https://restcountries.com/v3.1/all');

          setCountryData(countryData);
          
          setIsLoading(false);
      }

      fetchCountries();
  }, []);
  
  return (
    <Routes>
      <Route path="/">
        <Route index element={ <Home data={ countryData } isLoading={ isLoading } /> } />
        <Route path="/:country" element={ <Country data={ countryData } isLoading={ isLoading } /> } />
      </Route>
    </Routes>
  )
}

export default App;
