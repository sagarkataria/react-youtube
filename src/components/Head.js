import React from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoLogoYoutube } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";


const Head = () => {
    return (
        <>
            <div className='grid grid-flow-col p-5 shadow-md'>
                <div className='flex gap-3 col-span-1'>
                    <CiMenuBurger className="h-5 w-6 " />
                    <IoLogoYoutube className="h-6 w-6 text-red-500" />
                </div>
                <div className="col-span-10 text-center px-10">
                    <div className="flex items-center justify-center">
                        <input
                            type="text"
                            className="w-1/2 p-3 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                            placeholder="Search"
                        />
                        <button className="p-3 bg-gray-100 border border-gray-300 rounded-r-full hover:bg-gray-200 flex items-center justify-center">
                            <CiSearch className="h-6 w-6 text-gray-600" />
                        </button>
                    </div>
                </div>


                <div className='col-span-1'>
                    <FaUserAlt className='h-5' />
                </div>
            </div>
        </>
    )
}

export default Head