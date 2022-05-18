import React from 'react'

const CountryResults = ({ countries, loading }) => {
    console.log(countries)
  return (
    <div>
            {loading || !countries ? 'Loading' : countries?.map((country) => (
                <div key={country.name.common}>
                    {country.name.common}
                </div>
            ))}
        </div>
  )
}

export default CountryResults