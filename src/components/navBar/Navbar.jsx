import { useState } from 'react';
import dollerCoin from '../../assets/dollar .png'
import logo from '../../assets/logo.png'
import Hamburger from 'hamburger-react'





const Navbar = ({ coin, toggoleDaisyTheme }) => {
    const [open, setOpen] = useState(false);

    const menus = <>
        <li className='btn btn-ghost font-normal text-[#131313b2]'>Home</li>
        <li className='btn btn-ghost font-normal text-[#131313b2]'>Fixture</li>
        <li className='btn btn-ghost font-normal text-[#131313b2]'>Teams</li>
        <li className='btn btn-ghost font-normal text-[#131313b2]'>Schedules</li>
    </>
    return (
        <>
            <nav className='navbar bg-base-100 shadow-sm fixed top-0 z-10'>
                <div className="container mx-auto flex">
                    <div className="flex-1">
                        <ul className={`absolute top-16  gap-2 bg-base-100 shadow-sm  flex md:hidden flex-col ${open ? 'right-0 opacity-100' : '-right-27 opacity-0'} duration-200 transition-all ease-in-out`}>
                            {
                                menus
                            }
                        </ul>

                        <a className="btn btn-circle btn-ghost text-xl"><img src={logo} alt="" /></a>
                    </div>
                    <div className="flex items-center gap-12">
                        <ul className=' hidden md:flex items-center gap-2'>
                            {menus}
                        </ul>
                        <div className='flex items-center'>
                            <button className="btn btn-ghost" onClick={toggoleDaisyTheme}>
                                <span className='font-semibold'>{coin} Coin</span>
                                <img src={dollerCoin} alt="" />
                            </button>
                            <span className='md:hidden btn btn-ghost'><Hamburger onToggle={() => setOpen(!open)}></Hamburger></span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;