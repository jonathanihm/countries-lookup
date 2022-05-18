import { React, useState } from 'react'


const CountrySearch = ({ setCountries, setLoading, setError }) => {
    const CODE_TYPE = 'code';
    const NAME_TYPE = 'name';
    const FULL_NAME_TYPE = 'fullName';
    const NO_SEARCH_TERM_ERROR = 'Please Enter Your Search Term';
    const NO_RESULTS_ERROR = 'No Results Found';

    const [searchValue, setSearchValue] = useState('');
    const [searchType, setSearchType] = useState('name')

    const onChangeHandler = event => {
        setSearchValue(event.target.value);
     };

    let handleSubmit = (event) => {
        event.preventDefault();
        setError('');

        if (!searchValue) {
            setError(NO_SEARCH_TERM_ERROR);
            return;
        }

        setLoading(true);

        // NOTE: if we want to remove the dropdown to select the type of search,
        // we would need to make all three API calls and merge the results, which could be expensive 
        let endpoint = '';
        switch (searchType) {
            case CODE_TYPE:
                endpoint = `http://localhost:3001/alpha/${searchValue}`;
                break;
            case FULL_NAME_TYPE:
                endpoint = `http://localhost:3001/full-name/${searchValue}`;
                break;
            case NAME_TYPE:
            default:
                endpoint = `http://localhost:3001/name/${searchValue}`;
                break;
        }

        const fetchData = async () => {
          await fetch(endpoint)
            .then((response) => response.json())
            .then((data) => {
              setCountries(data);
              setLoading(false);
            })
            .catch(function() {
                setError(NO_RESULTS_ERROR);
            });
        }
    
        fetchData();
    }

  return (
    <form onSubmit={handleSubmit}>
        <input value={searchValue} onChange={onChangeHandler} />
        <select value={searchType} onChange={e => setSearchType(e.currentTarget.value)}>
            <option value="name">Name</option>
            <option value="fullName">Full Name</option>
            <option value="code">Country Code</option>
        </select>
        <button type="submit">Search</button>
    </form>
  )
}

export default CountrySearch