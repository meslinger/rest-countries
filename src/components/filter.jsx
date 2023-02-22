import { Listbox } from "@headlessui/react"
import { useState } from "react"
import { FaChevronDown } from "react-icons/fa"

const Filter = ({ listItems, regionFilter }) => {
  const [selectedItem, setSelectedItem] = useState('');

  const handleChange = (val) => {
    val === 'All' ? setSelectedItem('') : setSelectedItem(val);

    regionFilter(val);
  }

  return (
    <Listbox onChange={ handleChange } as="div" className="relative">
      <Listbox.Button className="inline-flex w-72 justify-between items-center rounded-md shadow-md p-5 text-lmDarkBlue-900 text-sm font-semibold hover:bg-opacity-30 focus:outline-transparent focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:bg-dmDarkBlue-700 dark:text-white">
        <span className="pl-2 pr-8">{ selectedItem === '' ? 'Filter by Region' : selectedItem }</span>
        <FaChevronDown />
      </Listbox.Button>
      <Listbox.Options className="bg-white dark:bg-dmDarkBlue-700 text-lmDarkBlue-900 dark:text-white absolute right-0 mt-2 py-2 w-full origin-top-right rounded-md shadow-lg ring-1 ring-dmDarkBlue-900 ring-opacity-5 focus:outline-transparent sm:text-sm">
        {
          listItems.map((item, index) =>(
            <Listbox.Option key={ index } value={ item } className={ ({ active }) => `relative cursor-default select-none px-7 py-1.5 ${ active ? 'bg-dmDarkBlue-900 text-white' : 'text-lmDarkBlue-900 dark:text-white' }` }>
              { item }
            </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}

export default Filter