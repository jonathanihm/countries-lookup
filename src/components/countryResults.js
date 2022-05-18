import React from 'react'

const CountryResults = ({ countries, loading }) => {
  return (
    <div>
         {countries.length > 0 && !loading ? (
            <table className="border-collapse table-auto w-full text-md">
                <thead>
                    <tr>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-left">Name</th>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-left">Code 2</th>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-left">Code 3</th>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-left">Flag</th>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-left">Region</th>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-left">Subregion</th>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-left">Population</th>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-left">Language</th>
                    </tr>
                </thead>
                <tbody>
                {countries?.map((country) => (
                    <tr className="flex-row" key={country.name.official}>
                        <td className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-left">{country.name.official}</td>
                        <td className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-left">{country.cca2}</td>
                        <td className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-left">{country.cca3}</td>
                        <td className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-left"><img className="max-h-8" src={country.flags.png} /></td>
                        <td className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-left">{country.region}</td>
                        <td className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-left">{country.subregion}</td>
                        <td className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-left">{country.population}</td>
                        <td className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-left">
                            <ul>
                                {country.languages ? 
                                    Object.getOwnPropertyNames(country?.languages)?.map((language) => (
                                        <li key={language}>{country?.languages[language]}</li>
                                    )) : ''}
                            </ul>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
         ) : loading ? 'Loading' : ''}
    </div>
  )
}

export default CountryResults