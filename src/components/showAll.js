import { useEffect, useState } from 'react';

//deprecated list all component, not used in client app
const ShowAll = () => {
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
        <div>
            {loading ? 'Loading' : countries?.map((country) => (
                <div key={country.name}>
                    {country.name}
                </div>
            ))}
        </div>
    )
}

export default ShowAll