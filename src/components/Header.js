import React from 'react';
// images
// import Logo from "../assets/logo.svg";
import Logo from '../assets/Black Elegant Modern Name Initials Monogram Logo (1).png';

const Header = () => {
  return <div className='py-8'>
        <div className='container mx-auto'>
          <div className='flex justify-between items-center'>
            <a href='#' className='w-[250px] h-[250px]'>
              <img src={Logo} alt=''></img>
            </a>
            {/* button */}
            <button className='btn btn-sm'>
              Work with Me
            </button>
          </div>
        </div>

  </div>;
};

export default Header;
