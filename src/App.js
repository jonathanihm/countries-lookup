import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      await fetch('http://localhost:3001/list')
        .then((response) => response.json())
        .then((data) => {
          setCountries(data);
          setLoading(false);
        });
    }

    fetchData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {loading ? 'Loading' : countries.map((country) => (
            <div key={country.name}>
              {country.name}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
