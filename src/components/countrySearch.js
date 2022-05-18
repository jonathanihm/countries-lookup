import { React, useState } from 'react'


const CountrySearch = ({ setCountries, setLoading }) => {
    const CODE_TYPE = 'code';
    const NAME_TYPE = 'name';
    const FULL_NAME_TYPE = 'fullName';
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const [searchValue, setSearchValue] = useState('');
    const [searchType, setSearchType] = useState('name')

    const onChangeHandler = event => {
        setSearchValue(event.target.value);
     };

    let handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);

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
                console.log('Google-  not so OK');
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