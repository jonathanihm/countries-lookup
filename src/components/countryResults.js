import React from 'react'

const CountryResults = ({ countries, loading }) => {
  return (
    <div>
            {loading || !countries ? 'Loading' : countries?.map((country) => (
                <div className="flex-row" key={country.name.official}>
                    <div className="flex-col">{country.name.official}</div>
                    <div className="flex-col">{country.cca2}</div>
                    <div className="flex-col"><img src={country.flags.png} /></div>
                    <div className="flex-col">{country.region}</div>
                    <div className="flex-col">{country.subregion}</div>
                    <div className="flex-col">{country.population}</div>
                    <div className="flex-col">Language</div>
                </div>
            ))}
        </div>
  )
}

export default CountryResults