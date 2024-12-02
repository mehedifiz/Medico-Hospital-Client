import { NavLink, useNavigate } from 'react-router-dom';
import {assets} from '../assets/assets'
import { useState } from 'react';
const Navbar = () => {

    const navigate = useNavigate();

    const [showMenu , setShowmenu] = useState(false)
    const [token , setToken] = useState(true)

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 '>
            <img src={assets.logo} className='w-44 cursor-pointer' alt="" />

            <ul className='hidden md:flex items-start gap-5 font-medium '>
                <NavLink to='/'>
                    <li className='py-1 '>Home</li>
                    <hr  className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden ' />
                </NavLink>
                <NavLink to='/doctors'>
                    <li className='py-1 '>All Doctors</li>
                    <hr  className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden '/>
                </NavLink>
                <NavLink to='/about'>
                    <li className='py-1 '>About Us</li>
                    <hr  className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden '/>
                </NavLink>
                <NavLink to='/contact'>
                    <li className='py-1 '>Contact</li>
                    <hr  className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden '/>
                </NavLink>
            </ul>

            <div className='flex items-center gap-4'>
                {
                    token ?<div>

                        
                    </div>
                    :
                <button onClick={()=> navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-bold hidden md:block'>Create Account</button>
                
                    
                }
            </div>
            
        </div>
    );
};

export default Navbar;