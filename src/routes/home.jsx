import { useEffect, useState } from 'react';

import NavBar from '../components/navbar';
import SearchBox from '../components/searchbox';
import Filter from '../components/filter';
import CountryCard from '../components/countrycard';

const Home = ({ data, isLoading }) => {
    const [countryNames, setCountryNames] = useState();
    const [regions, setRegions] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        if (isLoading || data.length < 1) {
            return;
        }

        setCountryNames(() => {
            return data.map((country) => country.name.common);
        });

        setRegions(() => {
            let regionList = [...new Set(data.map(country => country.region))];

            regionList.unshift("All");
            return regionList;
        });        
    }, [data, isLoading]);

    useEffect(() => {
        setFilteredCountries(data)
    }, [data]);

    const filterRegion = (val) => {
        setFilteredCountries(val === 'All' ? data : data.filter((country) => { return country.region === val }))
    }

    const filterCountry = (val) => {
        setFilteredCountries(data.filter((country) => { return country.name.common.toLowerCase().includes(val === '' || val === null ? "" : val.toLowerCase()); }));
    }

    return (
        <div className="antialiased">
            <NavBar />
            {
                (regions.length > 1 && countryNames.length > 0) ? (
                    <>
                        <section>
                            <div className="sticky mt-8">
                                <div className="mx-auto max-w-[1440px] px-4 md:px-8 flex flex-col gap-4 md:flex-row md:items-center justify-between">
                                    <SearchBox countries={ countryNames } countryFilter={ filterCountry } />
                                    <Filter listItems={ regions } regionFilter={ filterRegion } />
                                </div>
                            </div>
                        </section>
                        <main>
                            <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-8">
                                {
                                    (data !== null || data !== undefined) && (
                                        <div className="card-list my-0 mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 place-items-center">
                                            {
                                                filteredCountries.map((country, idx) => <CountryCard ctry={ country } key={ idx } /> )
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </main>
                    </>
                ) : (
                    <div className="left-0 top-0 w-full h-screen fixed bg-gray-500 opacity-100">
                        <div className="left-0 top-0 w-full h-screen absolute">
                            <div className="left-1/2 top-1/2 absolute -translate-x-1/2 -translate-y-1/2">
                                <span className="w-20 h-20 inline-block animate-spin rounded-full" style={{ 'border': 'solid 2px rgb(255, 255, 255, 0.05)' , 'borderTop': 'solid 2px rgb(255, 255, 255, 1)' }}></span>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Home