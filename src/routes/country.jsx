import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import NavBar from "../components/navbar";
import Button from "../components/button";

const Country = ({ data, isLoading }) => {
    const { country } = useParams();
    const [currentCountry, setCurrentCountry] = useState();

    useEffect(() => {
        if (isLoading || data.length < 1) {
            return;
        }

        setCurrentCountry(() => {
            return data.find((ctry) => {
                return (ctry.name.official.toLowerCase() === country.toLowerCase() ||
                    ctry.name.common.toLowerCase() === country.toLowerCase())
            })
        });
    }, [data, isLoading, country, currentCountry]);

    const mapNativeName = () => {
        let nativeNames = currentCountry.name.nativeName;

        return nativeNames.length > 0 ? nativeNames[0].official : currentCountry.name.official;
    };

    const mapBorderCountries = (val) => {        
       return data.find((ctry) => ctry.cca3 === val).name.common
    };

    return (
        <div className="antialiased">
            <NavBar />
            <main className="mx-auto max-w-[1440px] px-4 md:px-8 py-8">
                <div className="pt-2 pb-10 md:pt-16 md:pb-20 w-32">
                    <Button to="../" title="Back" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {
                        isLoading ? (
                            <div className="left-0 top-0 w-full h-screen fixed bg-gray-500 opacity-100">
                                <div className="left-0 top-0 w-full h-screen absolute">
                                    <div className="left-1/2 top-1/2 absolute -translate-x-1/2 -translate-y-1/2">
                                        <span className="w-20 h-20 inline-block animate-spin rounded-full" style={{ 'border': 'solid 2px rgb(255, 255, 255, 0.05)' , 'borderTop': 'solid 2px rgb(255, 255, 255, 1)' }}></span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            currentCountry === null || currentCountry === undefined ? (
                                <div className="text-3xl font-bold md:col-span-2">No country found.</div>
                            ) : (
                                    <>
                                        <div>
                                            <img src={currentCountry.flags.svg} alt={currentCountry.flags.alt} />
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-2xl pb-8 -mt-1.5">{ currentCountry.name.common }</h2>
                                            <div className="flex flex-col md:flex-row">
                                                <div className="justify-start md:w-1/2">
                                                    <p><span className="font-semibold">Native Name: </span>{ mapNativeName() }</p>
                                                    <p><span className="font-semibold">Population: </span>{ currentCountry.population.toLocaleString() }</p>
                                                    <p><span className="font-semibold">Region: </span>{ currentCountry.region }</p>
                                                    <p><span className="font-semibold">Sub Region: </span>{ currentCountry.subregion }</p>
                                                    <p><span className="font-semibold">Capital: </span>{ currentCountry.capital }</p>
                                                </div>
                                                <div className="justify-start md:w-1/2">   
                                                    <p><span className="font-semibold">Top Level Domain: </span>{ currentCountry.tld }</p>
                                                    <p><span className="font-semibold">Currencies: </span>{ Object.values(currentCountry.currencies).length > 0 ? Object.values(currentCountry.currencies).map((currency) => currency.name).join(", ") : "N/A" }</p>
                                                    <p><span className="font-semibold">Languages: </span>{ Object.values(currentCountry.languages).length > 0 ? Object.values(currentCountry.languages).map((language) => language).join(", ") : "N/A" }</p>                                                 
                                                </div>
                                            </div>
                                            <div className="pt-12">
                                                <h3 className="font-bold whitespace-nowrap">Border Countries: </h3>
                                                <div className="grid gap-4" style={{ 'gridTemplateColumns': 'repeat(auto-fill, 80px)' }}>                                                
                                                    {
                                                        currentCountry.borders && currentCountry.borders.length > 0 && (
                                                            currentCountry.borders.map((ctry, idx) => <Button to={ '/' + mapBorderCountries(ctry) } title={ ctry } key={ idx } /> )
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                        )
                    }
                </div>
            </main>
        </div>
    )
}

export default Country
