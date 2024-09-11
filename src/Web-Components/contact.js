import React from 'react'

export default function Contact() {
    return (
        <div className='h-[100%] w-[100%] px-[5vw] pb-[20vw] sm:pb-[5vw] sm:px-[10vw]  flex flex-col items-center' id='contact'>
            <h1 className=' text-[10vw] font-bold sm:text-[3vw] sm:pb-[5vw] pb-[10vw] text-[#3b63ff]'>Contact me</h1>
            <div className='flex flex-col gap-10 sm:gap-0 items-center flex-wrap sm:flex-row sm:justify-between sm:w-full'>
                <div className="h-[70vw] w-full sm:h-[17vw] sm:w-[15vw] sm:p-[1vw] sm:pt-[2vw] p-[4vw] flex flex-col items-center pt-[10vw] text-center shadow-[0_10px_20px_rgba(0,0,0,0.25)] dark:shadow-[0_10px_20px_rgba(255,255,255,0.25)] rounded-2xl" >
                    <div className="h-[20vw] w-[20vw] sm:h-[6vw] sm:w-[6vw] bg-[#3b63ff] rounded-[50%] flex items-center justify-center">
                        <i className="text-[8vw] sm:text-[2.3vw] text-white  fa-solid fa-location-dot"></i>
                    </div>
                    <h3 className='text-black dark:text-white text-[7vw] sm:text-[1.5vw] font-bold pb-[1vw]'>Address</h3>
                    <p className='text-black dark:text-white text-[5vw] sm:text-[1vw]'>Kot Muhammad Hussain,Street No 1, House No 23, Khanewal</p>
                </div>
                <div className="h-[70vw] w-full sm:h-[17vw] sm:w-[15vw] sm:p-[1vw] sm:pt-[2vw] p-[4vw] flex flex-col items-center pt-[10vw] text-center shadow-[0_10px_20px_rgba(0,0,0,0.25)] dark:shadow-[0_10px_20px_rgba(255,255,255,0.25)] rounded-3xl" >
                    <div className="h-[20vw] w-[20vw] sm:h-[6vw] sm:w-[6vw] bg-[#3b63ff] rounded-[50%] flex items-center justify-center">
                        <i className="text-[8vw] sm:text-[2.3vw] text-white  fa-solid fa-paper-plane"></i>
                    </div>
                    <h3 className='text-black dark:text-white text-[7vw] sm:text-[1.5vw] font-bold pb-[1vw]'>Email</h3>
                    <p className='text-black dark:text-white text-[5vw] sm:text-[1vw] text-wrap'>adnanamin.available @gmail.com</p>
                </div>

                <div className="h-[70vw] w-full sm:h-[17vw] sm:w-[15vw] sm:p-[1vw] sm:pt-[2vw] p-[4vw] flex flex-col items-center pt-[10vw] text-center shadow-[0_10px_20px_rgba(0,0,0,0.25)] dark:shadow-[0_10px_20px_rgba(255,255,255,0.25)] rounded-2xl" >
                    <div className="h-[20vw] w-[20vw] sm:h-[6vw] sm:w-[6vw] bg-[#3b63ff] rounded-[50%] flex items-center justify-center">
                        <i className="text-[8vw] sm:text-[2.3vw] text-white  fa-solid fa-phone"></i>
                    </div>
                    <h3 className='text-black dark:text-white text-[7vw] sm:text-[1.5vw] font-bold pb-[1vw]'>Contact No</h3>
                    <p className='text-black dark:text-white text-[5vw] sm:text-[1vw]'>+923265145770</p>
                </div>
                <div className="h-[70vw] w-full sm:h-[17vw] sm:w-[15vw] sm:p-[1vw] sm:pt-[2vw] p-[4vw] flex flex-col items-center pt-[10vw] text-center shadow-[0_10px_20px_rgba(0,0,0,0.25)] dark:shadow-[0_10px_20px_rgba(255,255,255,0.25)] rounded-2xl" >
                    <div className="h-[20vw] w-[20vw] sm:h-[6vw] sm:w-[6vw] bg-[#3b63ff] rounded-[50%] flex items-center justify-center">
                        <i className="text-[8vw] sm:text-[2.3vw] text-white  fa-solid fa-link"></i>
                    </div>
                    <h3 className='text-black dark:text-white text-[7vw] sm:text-[1.5vw] font-bold pb-[1vw]'>Linkedin</h3>
                    <a className='text-black dark:text-white text-[5vw] sm:text-[1vw]' href="https://www.linkedin.com/in/adnan123">Linkedin Profile</a>
                </div>
            </div>
            


        </div>
    )
}
