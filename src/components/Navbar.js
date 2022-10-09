import { Button, Link } from '@mui/material'
import React from 'react'

function Navbar({jwttoken}) {

    let button;

    if (!jwttoken) {
        button = <Button href= '/signin' className="my-2 inline-flex items-center bg-red-600 border-0 py-1 px-4 md:py-2 md:px-6 focus:outline-none hover:bg-blue-400 rounded text-white mt-4 md:mt-0"> Login
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Button>
      }
      else {
        button = <div className=" sm:-mx-2">
          <div className="inline-flex w-full mt-4 overflow-hidden rounded-lg  shadow sm:w-auto sm:mx-2 sm:mt-0">
            <Button href= '/userprofile' className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r  from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto">
              <img alt='' className='w-6' src='https://img.icons8.com/fluency/344/portfolio.png' ></img>
              <span className="mx-2">
                My Profile
              </span>
            </Button>
    
          </div>
        </div>
    
      }



    return (

        <div className='mb-1'>

  
        <nav className="bg-white border-gray-200 px-4 sm:px-4 py-2.5 rounded dark:bg-gray-800">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="/" className="flex items-center">
              <img src="logo.jpg" className="mr-3 h-14 sm:h-24" alt="Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Revitalize</span>
            </a>
            <button  data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              <svg  className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            <div class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center" id="mobile-menu">
              <ul className="flex flex-col mt-2.5 md:flex-row md:space-x-12 md:mt-0 md:text-lg md:font-medium">
                
              <li>
                  <Link underline="hover" href="/">
                  <a href="/" className="mr-5">Home</a>
                  </Link>
                </li>
                
                <li>
                <Link underline="hover" href="/about">
                  <a href="/about" className="mr-5">About</a>
                </Link>
                </li>
                <li>
                  <Link underline="hover" href="/rent">
                  <a href="/rent"  className="mr-5">Rent</a>
                  </Link>
                </li>
                <li>
                <Link underline="hover" href="/skills">
                  <a href="/skills"  className="mr-5">Skills</a>
                  </Link>
                </li>
                <li>
                <Link underline="hover" href="/contact">
                  <a href="/contact" className="mr-5">Contact Us</a>
                  </Link>
                </li>
              </ul>
              
            </div>

            {button}
  
          </div>
        </nav>
      </div>
    
    )
}

export default Navbar