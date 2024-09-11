import React from 'react'

export default function Skills(props) {
  return (
    <div className='h-[100%] w-[100%] px-[5vw] pb-[20vw] sm:pb-[10vw] sm:px-[10vw] flex flex-col items-center'>
      <h1 className=' text-[10vw] font-bold sm:text-[3vw] sm:pb-[5vw] pb-[10vw] sm:px-[5vw] text-[#3b63ff]'>My Skills</h1>
      <div className='flex flex-wrap gap-6 justify-center sm:gap-20 items-center'>
        <div className='transition-transform duration-300 hover:scale-[1.05] flex items-center w-[25vw] sm:w-[8vw] h-[100%] flex-col pb-[5vw] sm:pb-[1.5vw]'>
          <img className='w-[25vw] sm:w-[8vw]' src="\Pictures\html.png" alt="" />
          <p  className='text-black dark:text-white text-[4vw] sm:text-[1.4vw] font-bold'>HTML</p>
        </div>
        <div className='transition-transform duration-300 hover:scale-[1.05] flex items-center w-[25vw] sm:w-[8vw] h-[100%] flex-col pb-[5vw] sm:pb-[1.5vw]'>
          <img className='w-[25vw] sm:w-[8vw]' src="\Pictures\tailwind.png" alt="" />
          <p  className='text-black dark:text-white text-[4vw] sm:text-[1.4vw] font-bold'>Tailwind</p>
        </div>
        <div className='transition-transform duration-300 hover:scale-[1.05] flex items-center w-[25vw] sm:w-[8vw] h-[100%] flex-col pb-[5vw] sm:pb-[1.5vw]'>
          <img className='w-[25vw] sm:w-[8vw]' src="\Pictures\sass.png" alt="" />
          <p  className='text-black dark:text-white text-[4vw] sm:text-[1.4vw] font-bold'>Sass</p>
        </div>
        <div className='transition-transform duration-300 hover:scale-[1.05] flex items-center w-[25vw] sm:w-[8vw] h-[100%] flex-col pb-[5vw] sm:pb-[1.5vw]'>
          <img className='w-[25vw] sm:w-[8vw]' src="\Pictures\javascript.png" alt="" />
          <p  className='text-black dark:text-white text-[4vw] sm:text-[1.4vw] font-bold'>Javascript</p>
        </div>
        <div className='transition-transform duration-300 hover:scale-[1.05] flex items-center w-[25vw] sm:w-[8vw] h-[100%] flex-col pb-[5vw] sm:pb-[1.5vw]'>
          <img className='w-[25vw] sm:w-[8vw]' src="\Pictures\react.png" alt="" />
          <p  className='text-black dark:text-white text-[4vw] sm:text-[1.4vw] font-bold'>React Js</p>
        </div>
        <div className='transition-transform duration-300 hover:scale-[1.05] flex items-center w-[25vw] sm:w-[8vw] h-[100%] flex-col pb-[5vw] sm:pb-[1.5vw]'>
          <img className='w-[25vw] sm:w-[8vw]' src="\Pictures\c-sharp.png" alt="" />
          <p  className='text-black dark:text-white text-[4vw] sm:text-[1.4vw] font-bold'>C#</p>
        </div>
        <div className='transition-transform duration-300 hover:scale-[1.05] flex items-center w-[25vw] sm:w-[8vw] h-[100%] flex-col pb-[5vw] sm:pb-[1.5vw]'>
          <img className='w-[25vw] sm:w-[8vw]' src="\Pictures\kotlin.png" alt="" />
          <p  className='text-black dark:text-white text-[4vw] sm:text-[1.4vw] font-bold'>Kotlin</p>
        </div>
        <div className='transition-transform duration-300 hover:scale-[1.05] flex items-center w-[25vw] sm:w-[8vw] h-[100%] flex-col pb-[5vw] sm:pb-[1.5vw]'>
          <img className='w-[25vw] sm:w-[8vw]' src="\Pictures\python.png" alt="" />
          <p  className='text-black dark:text-white text-[4vw] sm:text-[1.4vw] font-bold'>Python</p>
        </div>
      </div>
      <h1 className=' text-[8vw] font-bold sm:text-[3vw] sm:pb-[2vw] sm:px-[5vw] py-[10vw] text-[#3b63ff]'>Tools</h1>
      <div className='flex flex-wrap justify-center gap-6 items-center sm:items-start sm:gap-20'>
        <div className='transition-transform duration-300 hover:scale-[1.05] flex items-center w-[25vw] sm:w-[8vw] h-[100%] flex-col pb-[5vw] sm:pb-[0]'>
          <img className='w-[25vw] sm:w-[8vw]' src="\Pictures\visual-studio-code.png" alt="" />
          <p  className='text-black dark:text-white text-[4vw] sm:text-[1.4vw] font-bold text-center'>Visual Studio Code</p>
        </div>
        <div className='transition-transform duration-300 hover:scale-[1.05] flex items-center w-[25vw] sm:w-[8vw] h-[100%] flex-col pb-[5vw] sm:pb-[0]'>
          <img className='w-[25vw] sm:w-[8vw]' src="\Pictures\visual-studio.png" alt="" />
          <p  className='text-black dark:text-white text-[4vw] sm:text-[1.4vw] font-bold text-center'>Visual Studio</p>
        </div>
        <div className='transition-transform duration-300 hover:scale-[1.05] flex items-center w-[25vw] sm:w-[8vw] h-[100%] flex-col pb-[5vw] sm:pb-[0]'>
          <img className='w-[25vw] sm:w-[8vw]' src="\Pictures\ms-sql-server.png" alt="" />
          <p  className='text-black dark:text-white text-[4vw] sm:text-[1.4vw] font-bold text-center'>MS Sql Server</p>
        </div>
        <div className='transition-transform duration-300 hover:scale-[1.05] flex items-center w-[25vw] sm:w-[8vw] h-[100%] flex-col pb-[5vw] sm:pb-[0]'>
          <img className='w-[25vw] sm:w-[8vw]' src="\Pictures\android.png" alt="" />
          <p  className='text-black dark:text-white text-[4vw] sm:text-[1.4vw] font-bold text-center'>Android Studio</p>
        </div>
        <div className='transition-transform duration-300 hover:scale-[1.05] flex items-center w-[25vw] sm:w-[8vw] h-[100%] flex-col pb-[5vw] sm:pb-[0]'>
          <img className='w-[25vw] sm:w-[8vw]' src="\Pictures\git.png" alt="" />
          <p  className='text-black dark:text-white text-[4vw] sm:text-[1.4vw] font-bold text-center '>Git Source Control</p>
        </div>
      </div>
    </div>
  );
}
