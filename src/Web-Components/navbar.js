import React from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';


export default function Navbar(props) {
  const [menuIcon, setMenuIcon] = useState('ri-menu-line')
  const [translateMenu, setTranslateMenu] = useState('translate-x-[-100%]')

  const changeMenu = () => {
    setMenuIcon(menuIcon === 'ri-menu-line' ? 'ri-close-large-line' : 'ri-menu-line')
    setTranslateMenu(translateMenu === 'translate-x-[-100%]' ? 'translate-x-[0]' : 'translate-x-[-100%]')
  }
  return (
    <>
      <div
        style={{ backgroundColor: props.bodyColor }} className={`flex justify-between items-center h-[15vw] px-[1vw] sm:h-[4vw] w-[100%] fixed z-30`}
      >
        <Link to="home" className='hidden sm:block'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
          <img className="sm:w-[3vw] sm:h-[3vw] cursor-pointer" src="\Pictures\profile-pic.png" alt="" />
        </Link>
        <i onClick={changeMenu} className={`${menuIcon} text-[8vw] text-black dark:text-white font-bold sm:hidden`}></i>
        <div className='hidden sm:flex sm:gap-7 sm:text-[1.2vw]'>
          <Link to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500} className="dark:text-white dark:hover:text-[#3b63ff] hover:text-[#3b63ff] text-[#bebfb1] font-bold cursor-pointer" >Home</Link>
          <Link to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500} className="dark:text-white dark:hover:text-[#3b63ff] hover:text-[#3b63ff] text-[#bebfb1] font-bold cursor-pointer" >About</Link>
          <Link to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500} className="dark:text-white dark:hover:text-[#3b63ff] hover:text-[#3b63ff] text-[#bebfb1] font-bold cursor-pointer" >Services</Link>
          <Link to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500} className="dark:text-white dark:hover:text-[#3b63ff] hover:text-[#3b63ff] text-[#bebfb1] font-bold cursor-pointer" >Projects</Link>
          <Link to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500} className="dark:text-white dark:hover:text-[#3b63ff] hover:text-[#3b63ff] text-[#bebfb1] font-bold cursor-pointer" >Contact</Link>
        </div>
        <div onClick={() => {
          props.changeIconClass();
          props.toggleMode();
        }} className='flex gap-4 justify-center items-center cursor-pointer'>
          <i
            className={`${props.iconClass} text-[8vw] text-black dark:text-white font-bold sm:text-[1.2vw]`}
          ></i>
          <p
            className='hidden sm:block sm:text-[1.2vw] text-black dark:text-white sm:font-bold'
          >
            Color Mode
          </p>
        </div>
      </div>
      <div className={`transform transition-transform duration-500 ease-in-out ${translateMenu} fixed  top-[15vw] right-0 left-0 w-full  sm:hidden z-30`}>
        <div className='flex flex-col items-center gap-3 py-[5vw] bg-[#FAFAFA] dark:bg-[#3c4043] absolute w-full'>
        <Link to="home"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500} onClick={changeMenu} className="dark:text-white dark:hover:text-[#3b63ff] hover:text-[#3b63ff] text-black  cursor-pointer" >Home</Link>
          <Link to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500} onClick={changeMenu} className="dark:text-white dark:hover:text-[#3b63ff] hover:text-[#3b63ff] text-black  cursor-pointer" >About</Link>
          <Link to="services"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500} onClick={changeMenu} className="dark:text-white dark:hover:text-[#3b63ff] hover:text-[#3b63ff] text-black  cursor-pointer" >Services</Link>
          <Link to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500} onClick={changeMenu} className="dark:text-white dark:hover:text-[#3b63ff] hover:text-[#3b63ff] text-black  cursor-pointer" >Projects</Link>
          <Link to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500} onClick={changeMenu} className="dark:text-white dark:hover:text-[#3b63ff] hover:text-[#3b63ff] text-black  cursor-pointer" >Contact</Link>
        </div>
      </div>
    </>
  );
}
