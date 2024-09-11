import React from 'react'

export default function Footer() {
    return (
        <div className='bg-[#F5F5F5] dark:bg-[#3c4043] h-[100%] w-[100%] px-[5vw] pb-[4vw] sm:pb-[1vw] sm:px-[10vw] flex flex-col gap-8 text-center '>
            <div className='w-full flex items-center pt-[10vw] sm:pt-[5vw]'>
                <div className='flex items-center w-full'>
                    <div className='hidden sm:block flex-grow border-[0.2vw] border-[#3b63ff] rounded-lg'></div>
                    <div className="flex justify-evenly sm:justify-center gap-5 px-[3vw] w-full sm:w-auto">
                        <a target="_blank" rel="noopener noreferrer" className='transition-transform duration-300 hover:scale-[1.05] h-[15vw] w-[15vw] sm:h-[4vw] sm:w-[4vw] rounded-[50%] flex justify-center items-center bg-white' href="https://www.linkedin.com/in/adnan123">
                            <i className="text-[#3b63ff] text-[9vw] sm:text-[2vw] ri-linkedin-box-fill"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" className='transition-transform duration-300 hover:scale-[1.05] h-[15vw] w-[15vw] sm:h-[4vw] sm:w-[4vw] rounded-[50%] sm:p-[2vw] flex justify-center items-center bg-white' href="https://github.com/AdnanAmin045">
                            <i className="text-[#3b63ff] text-[9vw] sm:text-[2vw] ri-github-fill"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" className='transition-transform duration-300 hover:scale-[1.05] h-[15vw] w-[15vw] sm:h-[4vw] sm:w-[4vw] rounded-[50%] flex justify-center items-center bg-white' href="mailto:adnanamin.available@gmail.com">
                            <i className="text-[#3b63ff] text-[9vw] sm:text-[2vw] ri-mail-send-line"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" className='transition-transform duration-300 hover:scale-[1.05] h-[15vw] w-[15vw] sm:h-[4vw] sm:w-[4vw] rounded-[50%] sm:p-[2vw] flex justify-center items-center bg-white' href="https://wa.me/923265145770">
                            <i className="text-[#3b63ff] text-[9vw] sm:text-[2vw] ri-whatsapp-line"></i>
                        </a>
                    </div>
                    <div className='hidden sm:block flex-grow border-[0.2vw] border-[#3b63ff] rounded-lg'></div>
                </div>

            </div>
            <p className='text-[10vw] sm:text-[5vw] text-[#3b63ff] font-bold sm:pt-[5vw]'>"Thanks for Scrolling"</p>
            <div className='text-[#b1acb1] text-[5vw] sm:text-[1vw]'>
                <p>Copyright © 2024 All rights reserved | Build with ❤️ by <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/adnan123" className='underline'> Adnan Amin</a></p>
            </div>

        </div>
    )
}
