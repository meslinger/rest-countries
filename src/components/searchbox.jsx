import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { FaSearch } from 'react-icons/fa'

const SearchBox = ({ countries, countryFilter }) => {
  const [selected, setSelected] = useState('');
  const [query, setQuery] = useState('');

  let filteredCountries = query === '' ? countries : countries.filter((country) => country.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, '')));

  const handleSearch = (val) => {
    setSelected(val);

    countryFilter(val);
  }

  return (
    <Combobox value={ selected } onChange={ handleSearch } nullable className="w-full md:w-96">
      <div className="relative mt-1">
        <div className="relative w-full cursor-default p-3 overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm dark:bg-dmDarkBlue-700">
          <Combobox.Input placeholder='Search for a country...' className="w-full border-none py-2 px-10 text-sm text-lmDarkBlue-900 leading-5 focus:outline-transparent focus:ring-0 dark:bg-dmDarkBlue-700 dark:text-white focus-visible:outline-none focus-visible:border-none" displayValue={(country) => country} onChange={(event) => setQuery(event.target.value)} />
          <Combobox.Button className="absolute inset-y-0 left-0 flex items-center pl-4 pr-2">
            <FaSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </Combobox.Button>
        </div>
        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" afterLeave={() => setQuery('')}>
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-lmDarkBlue-900 py-1 text-base shadow-lg ring-1 ring-dmDarkBlue-900 ring-opacity-5 focus:outline-none sm:text-sm dark:bg-dmDarkBlue-700 dark:text-white">
            {filteredCountries.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                No available country.
              </div>
            ) : (
              filteredCountries.map((country, idx) => (
                <Combobox.Option key={ idx } className={ ({ active }) => `relative cursor-default select-none py-1.5 pl-10 pr-4 ${ active ? 'bg-dmDarkBlue-900 text-white' : 'text-lmDarkBlue-900 dark:text-white' }` } value={country} >
                  {({ selected, active }) => (
                      <span className={`block truncate ${ selected ? 'font-medium' : 'font-normal' }`}> {country} </span>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  )
}

export default SearchBox