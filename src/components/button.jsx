import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";

const Button = ({ to, title }) => {
  return (    
    <Link to={ to } title={ title } className="dark:bg-dmDarkBlue-700 block rounded-md shadow-md">
        <div className="flex py-2 px-6 font-semibold items-center justify-evenly">
            {
                to === "../" ? (
                    <>
                        <FaArrowLeft /><span>{ title }</span>
                    </>
                ) : (
                    <>{ title }</>
                )
            }
        </div>
    </Link>
  )
}

export default Button