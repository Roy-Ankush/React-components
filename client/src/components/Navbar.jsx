import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar(props) {
    const [left, setLeft] = useState('-150px');
    const handleClick = () => {
        setLeft((prevLeft) => (prevLeft === '-150px' ? '0' : '-150px'));
    };

    return (
        <>
            <div className="main min-w-full bg-slate-800 max-h-20 flex justify-between items-center px-4">

                <div className="text-white font-bold m-5 s:hidden px-5">Logo</div>
                <div className="text-white font-bold m-5 hidden s:block"><GiHamburgerMenu onClick={handleClick} className='font-light text-2xl' /></div>
                <div className="text-green-600 font-bold ">
                    <div className={`s:bg-slate-800 p-5 s:absolute s:top-16 s:h-fit transition-all duration-500`}
                        style={{ left: left }} >
                        <ul className="flex flex-col sm:flex-row sm:space-x-7 space-y-4 sm:space-y-0  rounded-lg s:space-y-8 text-white ">
                            <li onClick={handleClick} className="hover:bg-slate-500 hover:underline p-2 rounded">{props.first}</li>
                            <li onClick={handleClick} className="hover:bg-slate-500 hover:underline p-2 rounded">About</li>
                            <li onClick={handleClick} className="hover:bg-slate-500 hover:underline p-2 rounded">Skills</li>
                            <li onClick={handleClick} className="hover:bg-slate-500 hover:underline p-2 rounded">Services</li>
                            <li onClick={handleClick} className="hover:bg-slate-500 hover:underline p-2 rounded">Contact</li>
                        </ul>
                    </div>

                </div>
                <div className="text-white font-bold m-5 s:block hidden px-5">Logo</div>
            </div>


        </>
    )
}

export default Navbar
