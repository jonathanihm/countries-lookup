import './App.css';
import { useState } from 'react';
import CountryResults from './components/countryResults.js';
import CountrySearch from './components/countrySearch.js';
import CountrySummary from './components/countrySummary.js';

function App() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  return (
    <div className="App 4xl">
      <header className="App-header">
        <h1 className="mt-10 font-bold">
          Supa Country Search
        </h1>
        <CountrySearch setCountries={setCountries} setLoading={setLoading} setError={setError} />
        { !error ? <CountryResults countries={countries} loading={loading} /> : error }
        <CountrySummary countries={countries} loading={loading} />
      </header>
    </div>
  );
}

export default App;
