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
      <header className="lg:text-center">
        <form onSubmit={handleSubmit} className="w-full text-black bg-white bg-opacity-10 shadow-md rounded inline-flex flex sm:flex px-4 pt-6 pb-8 mb-4 flex-col items-stretch">
            <div className="flex-1 flex flex-col sm:flex-row">
                <input value={searchValue} onChange={onChangeHandler} className="text-black mt-1 flex-1 shadow appearance-none border rounded sm:rounded-none sm:rounded-l w-full h-16 px-3 focus:outline-none focus:shadow-outline py-4 sm:py-2" />
                <select value={searchType} onChange={e => setSearchType(e.currentTarget.value)} className="text-black mt-1 flex-1 shadow appearance-none border w-full h-16 px-3 focus:outline-none focus:shadow-outline py-4 sm:py-2">
                    <option value="name">Name</option>
                    <option value="fullName">Full Name</option>
                    <option value="code">Country Code</option>
                </select>
                <div className="flex items-center justify-between mb-1 contents">
                    <button type="submit" className="btn btn-xl btn-primary mt-1 rounded sm:rounded-none sm:rounded-r bg-blue-500 p-2 text-white">Search</button>
                </div>
            </div>
        </form>
      </header>
  )
}

export default CountrySearch