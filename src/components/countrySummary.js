import React from 'react'

const CountrySummary = ({ countries, loading }) => { 
    const regionCount = countries.map(country => country.region).reduce((lookup, region) => {
        if (!lookup.hasOwnProperty(region)) {
            lookup[region] = 0;
        }
        lookup[region]++;

        return lookup;
    }, {});
    
    const subRegionCount = countries.map(country => country.subregion).reduce((lookup, subregion) => {
        if (!lookup.hasOwnProperty(subregion)) {
            lookup[subregion] = 0;
        }
        lookup[subregion]++;

        return lookup;
    }, {});

  return (
    <div>
         {countries?.length > 0 && !loading ? (
             <div>
                <div>Total # of Countries: {countries.length}</div>
                <div className="flex flex-row">
                    <div>
                        <div>Region Summary</div>
                        {Object.keys(regionCount).map(region => (
                        <div key={region}>{region}: {regionCount[region]} </div>
                    ))}
                    </div>
                    <div></div> 
                    <div>
                        <div>Sub-Region Summary</div>
                        {Object.keys(subRegionCount).map(subregion => (
                        <div key={subregion}>{subregion}: {subRegionCount[subregion]} </div>
                    ))}
                    </div>
                </div>
             </div>
         ) : loading ? '' : ''}
    </div>
  )
}

export default CountrySummary