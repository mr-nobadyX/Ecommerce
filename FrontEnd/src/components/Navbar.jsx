import React, { useState } from 'react';
import {assets} from '../assets/assets.js';

const Navbar = () => {
  
  const [visible, setVisible] = useState(false); 

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      
    <Link to='/'><img src= {assets.logo} alt="" className='w-36' /></Link>

    <ul className='hidden sm-flex gap-5 text-sm text-gray-700'>
      
      <NabLink to='/' className="flex flex-col items-center gap-1">
      <p>Home</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
      </NabLink>S

      <NabLink to='/' className="flex flex-col items-center gap-1">
      <p>COLLECTIONS</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
      </NabLink>

      <NabLink to='/' className="flex flex-col items-center gap-1">
      <p>ABOUT</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
      </NabLink>

      <NabLink to='/' className="flex flex-col items-center gap-1">
      <p>CONTACT</p> hidden
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
      </NabLink>
    </ul>

    <div className='flex- items-center gap-6'>
        <img src={assets.search_icon} alt="" className='w-5 cursor-pointer' />

        <div className='group relative'>
          <img src={assets.profile_icon} alt="" className='w-5 cursor-pointer' />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>

            <div className='flex flex-col pag-2 w-36  py-3 px-5 bg-slate-100 text-gary-500 rounded'>

              <p className='coursor-pointer hover:text-black'> My profile</p>
              <p className='coursor-pointer hover:text-black'> Orders</p>
              <p className='coursor-pointer hover:text-black'>Log out</p>

            </div>
          </div>

          <Link className="relative" to="/cart" >
          <img src={assets.cart_icon} alt="" className='w-5 min-w-5'/>
          <p className='absolute right -[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black aspect-squre size-10px'>39</p>
          </Link>

          <img onClick={()=>{setVisible(true)}} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
        </div>
        {/* Sidebar menu for small screen */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            
        </div>
    </div>
      
    </div>
  );
};

export default Navbar;
