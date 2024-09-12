import React from 'react'
import aboutPic from '../resources/about-Pic.png'

export default function About(props) {
    return (
        <div className='h-[100%] w-[100%] px-[5vw] pb-[20vw] sm:pb-[10vw] sm:px-[10vw] sm:gap-[5vw] sm:flex' id='about'>
            <div className='flex flex-col w-[100%] sm:w-[60%]'>
                <h2 className='text-[#3b63ff] text-[10vw] sm:text-[3vw] font-bold'>About me</h2>
                <p className='text-black dark:text-white text-[5vw] sm:text-[1.3vw] text-justify sm:pt-[0.4vw]'>As a Computer Science student with a focus on .NET Framework projects, I have developed a strong foundation in software development. My academic background, combined with hands-on experience, allows me to deepen my technical skills and problem-solving abilities. I am highly passionate about leveraging technology to create meaningful and impactful solutions, and I look forward to contributing to projects that drive innovation and progress.</p>
                <a className='self-start hidden sm:flex sm:pt-[3vw]' href="https://drive.google.com/uc?export=download&id=1wecUiD1JsfIDoboiFFre4uJyGFfZVzYh" download="Resume_Adnan Amin_.Net Developer.pdf">
                    <button className="button-55 group flex justify-evenly items-center rounded-[1.5vw] p-[0.3vw] border-[#3b63ff] dark:border-white border-[0.4vw] w-[60vw] h-[13vw] sm:w-[12vw] sm:h-[3.5vw] sm:border-[0.1vw]">
                        <i className="text-black group-hover:text-[#3b63ff] dark:text-white sm:text-[1vw] ri-file-text-line"></i>
                        <p className='text-black group-hover:text-[#3b63ff] dark:text-white text-[4vw] sm:text-[1vw]'>Download Resume</p>
                    </button>
                </a>
            </div>
            <div className="about-img relative hidden sm:block w-[40%] bg-white h-auto after:absolute after:w-[20vw] after:h-[15vw] after:top-[22.9vw] after:left-[10vw] after:bg-[#3b63ff] after:rounded-[0.4vw] after:-z-10 after:content-[''] before:absolute before:w-[20vw] before:h-[15vw] before:-top-[0.5vw] before:-left-[0.5vw] before:bg-[#3b63ff] before:rounded-[0.4vw] before:-z-10 before:content-[''] ">
                <img src={aboutPic} alt="myPicture" />
            </div>
        </div>
    );
}
