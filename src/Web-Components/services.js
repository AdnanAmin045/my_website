import React from 'react'

export default function Services() {
    return (
        <div className='h-[100%] w-[100%] px-[5vw] pb-[20vw] sm:pb-[10vw] sm:px-[10vw] justify-center flex flex-col items-center' id='services'>
            <h1 className=' text-[10vw] font-bold sm:text-[3vw] sm:pb-[5vw] pb-[10vw] text-[#3b63ff]'>Services</h1>
            <div className="flex flex-col text-center gap-12 sm:flex-row sm:flex-wrap sm:gap-0 sm:justify-between cursor-pointer ">
                <div className="group h-[80vw] sm:h-[23vw] sm:w-[25vw] px-[2vw] sm:px-[1vw] flex flex-col items-center justify-center rounded-[9vmin] shadow-[0_10px_20px_rgba(0,0,0,0.25)] dark:shadow-[0_10px_20px_rgba(255,255,255,0.25)] sm:justify-start sm:pt-[3vw]  transition-colors duration-300  hover:sm:bg-[#3b63ff] sm:mb-[3vw]" >
                    <i className="text-[10vw] sm:text-[4vw] text-[#3b63ff] transition-colors duration-300 group-hover:sm:text-white  fa-solid fa-code"></i>
                    <p  className="text-[7vw] sm:text-[1.6vw] font-bold pb-[3vw] transition-colors duration-300 sm:py-[1vw] group-hover:sm:text-white dark:text-white ">Web Design</p>
                    <p  className="text-[4vw] dark:text-white sm:text-[1.1vw] text-black transition-colors duration-300 group-hover:text-white">I create dynamic, responsive, and user-friendly websites, ensuring efficient and scalable web applications with an exceptional user experience.</p>
                </div>

                <div className=" group h-[80vw] sm:h-[23vw] sm:w-[25vw] px-[2vw] sm:px-[1vw] flex flex-col items-center justify-center rounded-[9vmin] shadow-[0_10px_20px_rgba(0,0,0,0.25)] dark:shadow-[0_10px_20px_rgba(255,255,255,0.25)] sm:justify-start sm:pt-[3vw] hover:sm:bg-[#3b63ff] sm-px-[2vw] cursor-pointer transition-colors duration-300  sm:mb-[3vw]" >
                    <i className="text-[10vw] sm:text-[4vw] transition-colors duration-300 text-[#3b63ff] group-hover:sm:text-white fa-solid fa-code"></i>
                    <p  className="text-[7vw] dark:text-white sm:text-[1.6vw] font-bold pb-[3vw] sm:py-[1vw] transition-colors duration-300 group-hover:sm:text-white text-black group-hover:text-white">Web Developer</p>
                    <p  className="text-[4vw] dark:text-white sm:text-[1.1vw] text-black group-hover:text-white transition-colors duration-300">I develop fully functional websites with comprehensive C# integration, ensuring seamless performance and robust functionality. Leveraging the power of ASP.NET.
                    </p>
                </div>
                <div className=" group h-[80vw] sm:h-[23vw] sm:w-[25vw] px-[2vw] sm:px-[1vw] flex flex-col items-center justify-center rounded-[9vmin] shadow-[0_10px_20px_rgba(0,0,0,0.25)] dark:shadow-[0_10px_20px_rgba(255,255,255,0.25)] sm:justify-start sm:pt-[3vw] hover:sm:bg-[#3b63ff] sm-px-[2vw] cursor-pointer transition-colors duration-300  sm:mb-[3vw]" >
                    <i className="text-[10vw] sm:text-[4vw] transition-colors duration-300 text-[#3b63ff] group-hover:sm:text-white fa-solid fa-file-code"></i>
                    <p  className="text-[7vw] dark:text-white sm:text-[1.6vw] font-bold pb-[3vw] sm:py-[1vw] transition-colors duration-300 group-hover:sm:text-white text-black"> Desktop Application</p>
                    <p  className="text-[4vw] dark:text-white sm:text-[1.1vw] text-black group-hover:text-white transition-colors duration-300">I can design applications using the C# framework, ensuring fully responsive functionality tailored to the client's needs</p>
                </div>
                <div className=" group h-[80vw] sm:h-[23vw] sm:w-[25vw] px-[2vw] sm:px-[1vw] flex flex-col items-center justify-center rounded-[9vmin] shadow-[0_10px_20px_rgba(0,0,0,0.25)] dark:shadow-[0_10px_20px_rgba(255,255,255,0.25)] sm:justify-start sm:pt-[3vw] hover:sm:bg-[#3b63ff] sm-px-[2vw] cursor-pointer transition-colors duration-300 sm:mb-[3vw]" >
                    <i className="text-[10vw] sm:text-[4vw] transition-colors duration-300 text-[#3b63ff] group-hover:sm:text-white fa-brands fa-android"></i>
                    <p  className="text-[7vw] dark:text-white sm:text-[1.6vw] font-bold pb-[3vw] sm:py-[1vw] transition-colors duration-300 group-hover:sm:text-white text-black">Android Developer</p>
                    <p  className="text-[4vw] dark:text-white sm:text-[1.1vw] text-black group-hover:text-white transition-colors duration-300">
                        I develop Android applications using XML for the frontend and Kotlin for the backend, creating user interfaces and robust back-end functionality.</p>
                </div>
                <div className=" group h-[80vw] sm:h-[23vw] sm:w-[25vw] px-[2vw] sm:px-[1vw] flex flex-col items-center justify-center rounded-[9vmin] shadow-[0_10px_20px_rgba(0,0,0,0.25)] dark:shadow-[0_10px_20px_rgba(255,255,255,0.25)] sm:justify-start sm:pt-[3vw] hover:sm:bg-[#3b63ff] sm-px-[2vw] cursor-pointer transition-colors duration-300 sm:mb-[3vw] " >
                    <i className="text-[10vw] sm:text-[4vw] transition-colors duration-300 text-[#3b63ff] group-hover:sm:text-white fa-solid fa-database"></i>
                    <p  className="text-[7vw] dark:text-white sm:text-[1.6vw] font-bold pb-[3vw] sm:py-[1vw] transition-colors duration-300 group-hover:sm:text-white text-black">Database Design</p>
                    <p  className="text-[4vw] dark:text-white sm:text-[1.1vw] text-black group-hover:text-white transition-colors duration-300">
                        I can design a database for your business ideas, ensuring data integrity and normalization, making it easy to implement into your website</p>
                </div>
                <div className=" group h-[80vw] sm:h-[23vw] sm:w-[25vw] px-[2vw] sm:px-[1vw] flex flex-col items-center justify-center rounded-[9vmin] shadow-[0_10px_20px_rgba(0,0,0,0.25)] dark:shadow-[0_10px_20px_rgba(255,255,255,0.25)] sm:justify-start sm:pt-[3vw] hover:sm:bg-[#3b63ff] sm-px-[2vw] cursor-pointer transition-colors duration-300 sm:mb-[3vw] ">
                    <i className="text-[10vw] sm:text-[4vw] transition-colors duration-300 text-[#3b63ff] group-hover:sm:text-white fa-solid fa-database"></i>
                    <p  className="text-[7vw] dark:text-white sm:text-[1.6vw] font-bold pb-[3vw] sm:py-[1vw] transition-colors duration-300 group-hover:sm:text-white ">Database Administrator</p>
                    <p  className="text-[4vw] dark:text-white sm:text-[1.1vw] group-hover:text-white transition-colors duration-300">
                    Manage the database system post-design, ensuring stability and efficiency. Continuously monitor and optimize performance to maintain peak operational effectiveness.</p>
                </div>
            </div>

        </div>
    )
}
