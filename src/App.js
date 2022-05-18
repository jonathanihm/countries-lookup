import './App.css';
import { useEffect, useState } from 'react';
import CountryResults from './components/countryResults.js';
import CountrySearch from './components/countrySearch.js';

function App() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        {/* <ShowAll /> */}
        <CountrySearch setCountries={setCountries} setLoading={setLoading} setError={setError} />
        { !error ? <CountryResults countries={countries} loading={loading} /> : error }
      </header>
    </div>
  );
}

export default App;
