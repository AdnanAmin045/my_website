import React from 'react'

export default function Projects() {
    return (
        <div className='h-[100%] w-[100%] px-[5vw] pb-[20vw] sm:pb-[10vw] sm:px-[10vw] flex flex-col items-center' id='projects'>
            <h1 className=' text-[10vw] font-bold sm:text-[3vw] sm:pb-[5vw] pb-[10vw] sm:px-[5vw] text-[#3b63ff]'>Projects</h1>
            <div className='flex flex-col sm:flex-row sm:justify-between gap-10 flex-wrap sm:gap-15'>

                {/* First Project */}

                <div className={`rounded-[3vw] relative flex flex-col items-center border-2 border-black dark:border-white p-[3vw] sm:w-[100%]  sm:justify-center sm:flex-row sm:p-[2vw]  bg-white dark:bg-[#3c4043] before:content-[''] before:absolute before:w-full before:h-full before:bg-black dark:before:bg-white before:rounded-[3vw] before:top-[1.5vw] before:left-[1.5vw] sm:before:top-[0.8vw] sm:before:left-[0.8vw] before:z-[-2]`}>
                    <img className='w-[70vw] sm:w-[20vw] transition-transform duration-300 hover:scale-[1.05]' src="Pictures/bank-system.png" alt="bank-system" />
                    <div className='flex flex-col'>
                        <h1 className='text-[7vw] sm:text-[2vw] font-bold underline dark:text-white text-black'>Banking Management System</h1>
                        <p className='text-[4vw] sm:text-[1.1vw] text-justify py-4 dark:text-white text-black'>Manage the accounts for owners, branch managers, and customers. Branch managers have the authority to oversee all operational activities within their respective branches, ensuring smooth and efficient branch performance. Customers are empowered to maintain their account information, monitor their account activity, and manage their transactions.
                        </p>
                        <div className="flex items-center gap-5">
                            <a target="_blank"
                                rel="noopener noreferrer" href="https://github.com/AdnanAmin045/Banking-Management-System.git">
                                <i className="text-[10vw] sm:text-[2.5vw] dark:text-white text-black ri-github-fill"></i>
                            </a>
                            <a target="_blank"
                                rel="noopener noreferrer" href="https://github.com/AdnanAmin045/Banking-Management-System.git">
                                <button className='text-[4vw] sm:text-[1.1vw] flex justify-center items-center text-black font-bold border-[0.3vmin] h-[10vw] w-[30vw] sm:h-[2.5vw] sm:w-[7vw] border-black rounded p-[0.1vmin] hover:sm:text-white hover:sm:bg-black dark:hover:sm:bg-white dark:border-white dark:hover:sm:text-black dark:text-white transition duration-[0.2s] ease-in'>Visit</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Second Project */}

                <div className="rounded-[3vw] relative  flex flex-col items-center border-2 border-black p-[3vw] sm:p-[2vw] sm:w-[45%] bg-white dark:bg-[#3c4043] dark:border-white before:content-[''] before:absolute before:w-full before:h-full before:bg-black dark:before:bg-white before:rounded-[3vw] before:top-[1.5vw] before:left-[1.5vw] sm:before:top-[0.8vw] sm:before:left-[0.8vw] before:z-[-2]">
                    <img className='w-[70vw] sm:w-[20vw] transition-transform duration-300 hover:scale-[1.05]' src="Pictures/Note-app.png" alt="bank-system" />
                    <div className='flex flex-col'>
                        <h1 className='text-[7vw] sm:text-[2vw] font-bold underline text-black dark:text-white'>NoteApp using Kotlin</h1>
                        <div className="flex items-center justify-between">
                            <a target="_blank" rel='noopener noreferrer' href="https://github.com/AdnanAmin045/NoteApp.git">
                                <i className="text-[10vw] sm:text-[2.5vw] dark:text-white text-black ri-github-fill"></i>
                            </a>
                            <a target="_blank" rel='noopener noreferrer' href="https://github.com/AdnanAmin045/NoteApp.git">
                                <button className='text-[5vw] sm:text-[1.3vw] flex justify-center items-center dark:text-white text-black font-bold underline'>Visit</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Third Project */}

                <div className="rounded-[3vw] relative  flex flex-col items-center border-2 border-black p-[3vw]  sm:p-[2vw] sm:w-[45%] bg-white dark:bg-[#3c4043] dark:border-white before:content-[''] before:absolute before:w-full before:h-full before:bg-black dark:before:bg-white before:rounded-[3vw] before:top-[1.5vw] before:left-[1.5vw] sm:before:top-[0.8vw] sm:before:left-[0.8vw] before:z-[-2]">
                    <img className='w-[70vw] sm:w-[20vw] transition-transform duration-300 hover:scale-[1.05]' src="Pictures/Railway-system.png" alt="bank-system" />
                    <div className='flex flex-col'>
                        <h1 className='text-[7vw] sm:text-[2vw] font-bold underline text-black dark:text-white'>Railway Reservation</h1>
                        <div className="flex items-center justify-between">
                            <a target="_blank" rel='noopener noreferrer' href="https://github.com/AdnanAmin045/Railway-Reservation-System.git">
                                <i className="text-[10vw] sm:text-[2.5vw] dark:text-white text-black ri-github-fill"></i>
                            </a>
                            <a target="_blank" rel='noopener noreferrer' href="https://github.com/AdnanAmin045/Railway-Reservation-System.git">
                                <button className='text-[5vw] sm:text-[1.3vw] flex justify-center items-center dark:text-white text-black font-bold underline'>Visit</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Fourth Project */}

                <div className="rounded-[3vw] relative  flex flex-col items-center border-2 border-black p-[3vw] sm:w-[100%] sm:justify-center sm:flex-row sm:p-[2vw] bg-white dark:bg-[#3c4043] dark:border-white before:content-[''] before:absolute before:w-full before:h-full before:bg-black dark:before:bg-white before:rounded-[3vw] before:top-[1.5vw] before:left-[1.5vw] sm:before:top-[0.8vw] sm:before:left-[0.8vw] before:z-[-2]">
                    <img className='w-[70vw] sm:w-[20vw] transition-transform duration-300 hover:scale-[1.05]' src="Pictures/FYP-system.png" alt="bank-system" />
                    <div className='flex flex-col'>
                        <h1 className='text-[7vw] sm:text-[2vw] font-bold underline dark:text-white text-black '>Final Year Project System</h1>
                        <p className='text-[4vw] sm:text-[1.1vw]  text-justify py-4 dark:text-white text-black'>In the final year of the Bachelor's degree, the university assigns projects to students. This application is designed to manage all activities related to the final year projects, including project groups and project instructors. Professors can then evaluate the projects and save their records.
                        </p>
                        <div className="flex items-center gap-5">
                            <a target="_blank" rel='noopener noreferrer' href="https://github.com/AdnanAmin045/Final-Year-Project-FYP-Management-System.git">
                                <i className="text-[10vw] dark:text-white text-black sm:text-[2.5vw] ri-github-fill"></i>
                            </a>
                            <a target="_blank" rel='noopener noreferrer' href="https://github.com/AdnanAmin045/Final-Year-Project-FYP-Management-System.git">
                                <button className='text-[4vw] sm:text-[1.1vw] flex justify-center items-center  font-bold border-[0.3vmin] h-[10vw] w-[30vw] border-black rounded p-[0.1vmin] sm:h-[2.5vw] sm:w-[7vw] hover:sm:text-white hover:sm:bg-black transition duration-[0.2s] ease-in dark:hover:sm:text-black dark:hover:sm:bg-white dark:border-white dark:text-white'>Visit</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Fiveth Project */}

                <div className="rounded-[3vw] relative  flex flex-col items-center border-2 border-black p-[3vw]  sm:p-[2vw] sm:w-[45%] bg-white dark:bg-[#3c4043] dark:border-white before:content-[''] before:absolute before:w-full before:h-full before:bg-black dark:before:bg-white before:rounded-[3vw] before:top-[1.5vw] before:left-[1.5vw] sm:before:top-[0.8vw] sm:before:left-[0.8vw] before:z-[-2]">
                    <img className='w-[70vw] sm:w-[20vw] transition-transform duration-300 hover:scale-[1.05]' src="Pictures/nicepage-website.png" alt="bank-system" />
                    <div className='flex flex-col'>
                        <h1 className='text-[7vw] sm:text-[2vw] font-bold underline text-black dark:text-white'>NicePage Website Design</h1>
                        <div className="flex items-center justify-between">
                            <a target="_blank" rel='noopener noreferrer' href="https://github.com/AdnanAmin045/nicepage">
                                <i className="text-[10vw] dark:text-white text-black sm:text-[2.5vw] ri-github-fill"></i>
                            </a>
                            <a target="_blank" rel='noopener noreferrer' href="https://github.com/AdnanAmin045/nicepage">
                                <button className='text-[5vw] sm:text-[1.3vw] flex justify-center items-center dark:text-white text-black font-bold underline'>Visit</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
