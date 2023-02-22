import { Link } from "react-router-dom"


const CountryCard = ({ ctry }) => {
    return (
        <Link to={`/${ ctry.name.common }`} className="shadow-md hover:scale-105 max-w-[256px]">
            <div>
                <img src={ctry.flags.png} alt={ctry.flags.alt} className="w-64 h-40 rounded-t-md" />
                <div className="p-6 dark:bg-dmDarkBlue-700 rounded-b-md">
                    <p className="pb-4"><span className="font-bold text-lg">{ctry.name.common}</span></p>
                    <p className="text-sm"><span className="font-semibold">Population: </span>{ctry.population.toLocaleString()}</p>
                    <p className="text-sm"><span className="font-semibold">Region: </span>{ctry.region}</p>
                    <p className="text-sm"><span className="font-semibold">Capital: </span>{ctry.capital}</p>
                </div>
            </div>
        </Link>
    )
}

export default CountryCard