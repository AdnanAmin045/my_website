import React from 'react'
import html from '../resources/html.png'
import tailwind from '../resources/tailwind.png'
import sass from '../resources/sass.png'
import javascript from '../resources/javascript.png'
import react from '../resources/react.png'
import csharp from '../resources/c-sharp.png'
import kotlin from '../resources/kotlin.png'
import python from '../resources/python.png'
import vscode from '../resources/visual-studio-code.png'
import vsStudio from '../resources/visual-studio.png'
import msServer from '../resources/ms-sql-server.png'
import androidStudio from '../resources/android.png'
import git from '../resources/git.png'


export default function Skills(props) {
  return (
    <div className='h-[100%] w-[100%] px-[5vw] pb-[20vw] sm:pb-[10vw] sm:px-[10vw] flex flex-col items-center'>
      <h1 className=' text-[10vw] font-bold sm:text-[3vw] sm:pb-[5vw] pb-[10vw] sm:px-[5vw] text-[#3b63ff]'>My Skills</h1>
      <div className='flex flex-wrap gap-6 justify-center sm:gap-20 items-center'>
        <div className='transition-transform duration-300 hover:scale-[1.05] flex items-center w-[25vw] sm:w-[8vw] h-[100%] flex-col pb-[5vw] sm:pb-[1.5vw]'>
          <img className='w-[25vw] sm:w-[8vw]' src={html} alt="" />
          <p  className='text-black dark:text-white text-[4vw] sm:text-[1.4vw] font-bold'>HTML</p>
        </div>
        <div className='transition-transform duration-300 hover:scale-[1.05] flex items-center w-[25vw] sm:w-[8vw] h-[100%] flex-col pb-[5vw] sm:pb-[1.5vw]'>
          <img className='w-[25vw] sm:w-[8vw]' src={tailwind} alt="" />
          <p  className='text-black dark:text-white text-[4vw] sm:text-[1.4vw] font-bold'>Tailwind</p>
        </div>
        <div className='transition-transform duration-300 hover:scale-[1.05] flex items-center w-[25vw] sm:w-[8vw] h-[100%] flex-col pb-[5vw] sm:pb-[1.5vw]'>
          <img className='w-[25vw] sm:w-[8vw]' src={sass} alt="" />
          <p  className='text-black dark:text-white text-[4vw] sm:text-[1.4vw] font-bold'>Sass</p>
        </div>
        <div className='transition-transform duration-300 hover:scale-[1.05] flex items-center w-[25vw] sm:w-[8vw] h-[100%] flex-col pb-[5vw] sm:pb-[1.5vw]'>
          <img className='w-[25vw] sm:w-[8vw]' src={javascript} alt="" />
          <p  className='text-black dark:text-white text-[4vw] sm:text-[1.4vw] font-bold'>Javascript</p>
        </div>
        <div className='transition-transform duration-300 hover:scale-[1.05] flex items-center w-[25vw] sm:w-[8vw] h-[100%] flex-col pb-[5vw] sm:pb-[1.5vw]'>
          <img className='w-[25vw] sm:w-[8vw]' src={react} alt="" />
          <p  className='text-black dark:text-white text-[4vw] sm:text-[1.4vw] font-bold'>React Js</p>
        </div>
        <div className='transition-transform duration-300 hover:scale-[1.05] flex items-center w-[25vw] sm:w-[8vw] h-[100%] flex-col pb-[5vw] sm:pb-[1.5vw]'>
          <img className='w-[25vw] sm:w-[8vw]' src={csharp} alt="" />
          <p  className='text-black dark:text-white text-[4vw] sm:text-[1.4vw] font-bold'>C#</p>
        </div>
        <div className='transition-transform duration-300 hover:scale-[1.05] flex items-center w-[25vw] sm:w-[8vw] h-[100%] flex-col pb-[5vw] sm:pb-[1.5vw]'>
          <img className='w-[25vw] sm:w-[8vw]' src={kotlin} alt="" />
          <p  className='text-black dark:text-white text-[4vw] sm:text-[1.4vw] font-bold'>Kotlin</p>
        </div>
        <div className='transition-transform duration-300 hover:scale-[1.05] flex items-center w-[25vw] sm:w-[8vw] h-[100%] flex-col pb-[5vw] sm:pb-[1.5vw]'>
          <img className='w-[25vw] sm:w-[8vw]' src={python} alt="" />
          <p  className='text-black dark:text-white text-[4vw] sm:text-[1.4vw] font-bold'>Python</p>
        </div>
      </div>
      <h1 className=' text-[8vw] font-bold sm:text-[3vw] sm:pb-[2vw] sm:px-[5vw] py-[10vw] text-[#3b63ff]'>Tools</h1>
      <div className='flex flex-wrap justify-center gap-6 items-center sm:items-start sm:gap-20'>
        <div className='transition-transform duration-300 hover:scale-[1.05] flex items-center w-[25vw] sm:w-[8vw] h-[100%] flex-col pb-[5vw] sm:pb-[0]'>
          <img className='w-[25vw] sm:w-[8vw]' src={vscode} alt="" />
          <p  className='text-black dark:text-white text-[4vw] sm:text-[1.4vw] font-bold text-center'>Visual Studio Code</p>
        </div>
        <div className='transition-transform duration-300 hover:scale-[1.05] flex items-center w-[25vw] sm:w-[8vw] h-[100%] flex-col pb-[5vw] sm:pb-[0]'>
          <img className='w-[25vw] sm:w-[8vw]' src={vsStudio} alt="" />
          <p  className='text-black dark:text-white text-[4vw] sm:text-[1.4vw] font-bold text-center'>Visual Studio</p>
        </div>
        <div className='transition-transform duration-300 hover:scale-[1.05] flex items-center w-[25vw] sm:w-[8vw] h-[100%] flex-col pb-[5vw] sm:pb-[0]'>
          <img className='w-[25vw] sm:w-[8vw]' src={msServer} alt="" />
          <p  className='text-black dark:text-white text-[4vw] sm:text-[1.4vw] font-bold text-center'>MS Sql Server</p>
        </div>
        <div className='transition-transform duration-300 hover:scale-[1.05] flex items-center w-[25vw] sm:w-[8vw] h-[100%] flex-col pb-[5vw] sm:pb-[0]'>
          <img className='w-[25vw] sm:w-[8vw]' src={androidStudio} alt="" />
          <p  className='text-black dark:text-white text-[4vw] sm:text-[1.4vw] font-bold text-center'>Android Studio</p>
        </div>
        <div className='transition-transform duration-300 hover:scale-[1.05] flex items-center w-[25vw] sm:w-[8vw] h-[100%] flex-col pb-[5vw] sm:pb-[0]'>
          <img className='w-[25vw] sm:w-[8vw]' src={git} alt="" />
          <p  className='text-black dark:text-white text-[4vw] sm:text-[1.4vw] font-bold text-center '>Git Source Control</p>
        </div>
      </div>
    </div>
  );
}
