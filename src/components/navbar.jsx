import ThemeIcon from "./themeIcon"

const NavBar = () => {
  return (
    <header className="sticky top-0 z-30 shadow-sm shadow-gray-200 bg-lmLightGray-400 dark:bg-dmDarkBlue-700 dark:shadow-gray-900">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 flex items-center justify-between" id="top-navigation">
          <h1 className="md:text-2xl text-base py-8 font-bold">Where in the world?</h1>
          <ThemeIcon />
        </div>
    </header>    
  )
}



export default NavBar