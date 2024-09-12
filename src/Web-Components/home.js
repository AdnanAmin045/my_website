
import React, { useEffect } from "react";
import { useRef } from "react";
import profilePicbgRemover from '../resources/profilePic-bgRemove.png'


export default function Home(props) {
    const textRef = useRef(null); // Initialize with null


    useEffect(() => {
        const textContainer = textRef.current;

        // Clear any previous spans before adding new ones
        while (textContainer.firstChild) {
            textContainer.removeChild(textContainer.firstChild);
        }

        const str = ".Net Developer - Web Developer";
        for (let i = 0; i < str.length; i++) {
            let span = document.createElement('span');
            span.innerText = str[i];

            // Add the required styles with Tailwind utility classes
            span.classList.add(
                'absolute',        // For absolute positioning
                'left-1/2',
                'font-bold',       // Center horizontally
                'sm:origin-[0_5vw]',
                'origin-[0_15vw]', // Tailwind's transform-origin equivalent
                'inline-block',
                'sm:text-[0.8vw]',
                'text-[2.5vw]',
                'dark:text-white',
                'text-[black]'  // Ensure inline display
            );

            // Apply the rotation using JavaScript
            span.style.transform = `rotate(${11 * i}deg)`;
            span.style.margin = '0';

            textContainer.appendChild(span);
        }

        // Cleanup function to remove all spans
        return () => {
            while (textContainer.firstChild) {
                textContainer.removeChild(textContainer.firstChild);
            }
        };
    }, []);





    return (
        <div className='relative pb-[20vw] sm:pb-[10vw] sm:px-[10vw] h-[100%] pt-[15vw] sm:pt-[5vw]' id="home">
            <div className='flex flex-col items-center gap-6 sm:flex-row sm:justify-between sm:relative'>
                <div className='flex flex-col items-center sm:items-start sm:text-[1.4vw] sm:leading-none'>
                    <p className='hidden sm:inline text-[#3b63ff] text-[1.8vw] tracking-[0.3vw] pl-[0.2vw]'>Muhammad Adnan Amin</p>
                    <p className='text-[9.5vw] sm:text-[3.5vw] text-black dark:text-white'><span className='hidden sm:inline'>Hi folks, </span><span className='text-black dark:text-white'>I'm a </span><span className='font-bold text-[#3b63ff]'>.Net Developer</span></p>
                    <div className='pt-[10vw] flex flex-col sm:flex-row  items-center sm:pt-[3vw] sm:gap-10'>
                        <div className='flex justify-evenly gap-5'>
                            <a target="_blank"
                                rel="noopener noreferrer" className='h-[12vw] w-[12vw] sm:h-[3vw] sm:w-[3vw] border-[0.1vw] border-[#3b63ff] rounded-[50%] flex justify-center items-center transition-transform duration-300 hover:scale-[1.05] ' href="https://www.linkedin.com/in/adnan123">
                                <i className="text-[8vw] sm:text-[1.5vw] text-black dark:text-white  ri-linkedin-box-fill "></i>
                            </a>
                            <a target="_blank"
                                rel="noopener noreferrer" className='h-[12vw] w-[12vw] sm:h-[3vw] sm:w-[3vw] border-[0.1vw] border-[#3b63ff] rounded-[50%] flex justify-center items-center transition-transform duration-300 hover:scale-[1.05] ' href="https://github.com/AdnanAmin045">
                                <i className="text-[8vw] sm:text-[1.5vw] text-black dark:text-white  ri-github-fill"></i>
                            </a>
                            <a target="_blank"
                                rel="noopener noreferrer" className='h-[12vw] w-[12vw] sm:h-[3vw] sm:w-[3vw] border-[0.1vw] border-[#3b63ff] rounded-[50%] flex justify-center items-center transition-transform duration-300 hover:scale-[1.05] ' href="mailto:adnanamin.available@gmail.com">
                                <i className="text-[8vw] sm:text-[1.5vw]  text-black dark:text-white ri-mail-send-line"></i>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" className='h-[12vw] w-[12vw] sm:h-[3vw] sm:w-[3vw] border-[0.1vw] border-[#3b63ff] rounded-[50%] flex justify-center items-center transition-transform duration-300 hover:scale-[1.05] ' href="https://wa.me/923265145770">
                                <i className="text-[8vw] sm:text-[1.5vw]  text-black dark:text-white ri-whatsapp-line"></i>
                            </a>
                        </div>
                        <a className='sm:hidden pt-[8vw] sm:pt-[0]  sm:pl-[4vw]' href="https://drive.google.com/uc?export=download&id=1wecUiD1JsfIDoboiFFre4uJyGFfZVzYh" download="Resume_Adnan Amin_.Net Developer.pdf">
                            <button className="button-55 group flex justify-evenly items-center rounded-[1.5vw] p-[0.3vw] border-[#3b63ff] border-[0.4vw] w-[50vw] h-[13vw] sm:w-[12vw] sm:h-[3.5vw] sm:border-[0.1vw] dark:border-white">
                                <i className="text-black dark:text-white sm:text-[1vw] ri-file-text-line"></i>
                                <p className=' text-black dark:text-white text-[4vw] sm:text-[1vw]'>Download Resume</p>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="sm:relative order-[-1] sm:after:content-[''] sm:after:absolute sm:after:w-full sm:after:h-[75%] sm:after:top-[5vw] sm:after:left-0 sm:after:border-[10px] sm:after:border-[#3b63ff] sm:after:z-[-20]">
                    <img className='w-[80vw] sm:w-[25vw]' src={profilePicbgRemover} alt="" />
                    <div className=" z-[-10] hidden sm:block absolute w-[0.4vw] h-[0.4vw] bg-[#3b63ff] rounded-[50%] drop1 top-[8vw] left-[5vw]"></div>
                    <div className=" z-[-10] hidden sm:block absolute w-[0.4676vw] h-[0.4676vw] bg-[#3b63ff] rounded-[50%] top-[10vw] left-[5vw]"></div>
                    <div className=" z-[-10] hidden sm:block absolute w-[0.52vw] h-[0.52vw] bg-[#3b63ff] rounded-[50%] top-[6vw] left-[17vw]"></div>
                    <div className=" z-[-10] hidden sm:block absolute w-[0.34vw] h-[0.34vw] bg-[#3b63ff] rounded-[50%] top-[16vw] left-[16vw]"></div>
                    <div className=" z-[-10] hidden sm:block absolute w-[0.52vw] h-[0.52vw] bg-[#3b63ff] rounded-[50%] top-[6vw] left-[20vw]"></div>
                    <div className=" z-[-10] hidden sm:block absolute w-[0.34vw] h-[0.34vw] bg-[#3b63ff] rounded-[50%] top-[16vw] left-[16vw]"></div>
                    <div className=" z-[-10] hidden sm:block absolute w-[0.45vw] h-[0.45vw] bg-[#3b63ff] rounded-[50%] top-[9vw] left-[3vw]"></div>
                    <div className=" z-[-10] hidden sm:block absolute w-[0.6vw] h-[0.6vw] bg-[#3b63ff] rounded-[50%] top-[15vw] left-[23vw]"></div>
                    <div className=" z-[-10] hidden sm:block absolute w-[0.37vw] h-[0.37vw] bg-[#3b63ff] rounded-[50%] top-[7vw] left-[21vw]"></div>
                    <div className=" z-[-10] hidden sm:block absolute w-[0.48vw] h-[0.48vw] bg-[#3b63ff] rounded-[50%] top-[18vw] left-[22vw]"></div>
                    <div className=" z-[-10] hidden sm:block absolute w-[0.4vw] h-[0.4vw] bg-[#3b63ff] rounded-[50%] top-[10vw] left-[1vw]"></div>
                    <div className=" z-[-10] hidden sm:block absolute w-[0.55vw] h-[0.55vw] bg-[#3b63ff] rounded-[50%] top-[11vw] left-[4vw]"></div>
                    <div className=" z-[-10] hidden sm:block absolute w-[0.36vw] h-[0.36vw] bg-[#3b63ff] rounded-[50%] top-[13vw] left-[6vw]"></div>
                    <div className=" z-[-10] hidden sm:block absolute w-[0.49vw] h-[0.49vw] bg-[#3b63ff] rounded-[50%] top-[20vw] left-[9vw]"></div>
                    <div className=" z-[-10] hidden sm:block absolute w-[0.53vw] h-[0.53vw] bg-[#3b63ff] rounded-[50%] top-[17vw] left-[2vw]"></div>
                    <div className=" z-[-10] hidden sm:block absolute w-[0.4vw] h-[0.4vw] bg-[#3b63ff] rounded-[50%] top-[6.5vw] left-[8vw]"></div>
                    <div className=" z-[-10] hidden sm:block absolute w-[0.35vw] h-[0.35vw] bg-[#3b63ff] rounded-[50%] top-[9vw] left-[20vw]"></div>
                    <div className=" z-[-10] hidden sm:block absolute w-[0.6vw] h-[0.6vw] bg-[#3b63ff] rounded-[50%] top-[7.5vw] left-[4vw]"></div>
                </div>

            </div>
            <a className="" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/adnan123">
                <div className="flex justify-center items-center absolute sm:top-[33vw] sm:right-[15vw] right-[10vw] top-[20vw]">
                    <h1 className="h-[20vw] w-[20vw] text-[3vw] sm:h-[6vw] sm:w-[6vw] rounded-full font-bold bg-black text-white shadow-custom sm:text-[1.2vw] sm:p-[0.2vw] flex justify-center items-center cursor-pointer dark:text-black dark:bg-white ">
                        Hire me
                    </h1>
                    <p ref={textRef} className="h-[30vw] w-[30vw] sm:h-[10vw] sm:w-[10vw] animate-effect absolute"></p>
                </div>
            </a>
        </div>
    );

}
