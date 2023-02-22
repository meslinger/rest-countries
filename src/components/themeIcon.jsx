import { FaMoon, FaRegMoon } from "react-icons/fa";

import useDarkMode from '../hooks/useDarkMode';

const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleTheme = () => setDarkTheme(!darkTheme);

    return (
        <button onClick={ handleTheme } className="inline-flex items-center p-2 text-lmDarkBlue-900 dark:text-white border-none rounded-sm py-3 px-4">
            {
                darkTheme ? (
                        <FaMoon className="mr-2" />
                ) : (
                        <FaRegMoon className="mr-2" />
                )
            }
            <span className="text-sm md:text-base">Dark Mode</span>
        </button>
    );
}

export default ThemeIcon