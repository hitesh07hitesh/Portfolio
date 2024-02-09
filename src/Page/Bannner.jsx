import React from 'react'
import './style.css'
import pic from '../assets/image/zxc.png'
import resume from '../assets/image/resume_icon.png'
import Contact from './Contact'
// import pict from '../assets/image/down.png'

const Bannner = () => {
    return (
        <>
            <Contact />
            <div className='hero h-[500px] md:h-[500px] flex relative'>
                <img className='shadow  h-[31rem] aw-[18rem] absolute bottom-0 right-0 adrop-shadow-2xl mr-8 z-10' src={pic} alt="sfd" />
                <div className='mt-4 absolute px-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-1/4 md:left-1/4 acvc text-[1.5rem] sm:text-[2rem] font-extrabold text-white z-20 ap-4 md:ml-4 '>
                    <h2 className='leading-none'>Hi, I'm <span className='cvc font-normal'> Hitesh</span> </h2>
                    <h2 className='leading-none '> Full-Stack Developer</h2>
                    <p className='text-[.8rem] w-[20rem] md:w-[25rem] mt-2'>
                        I'm a Full-Stack Developer passionate about crafting innovative solutions. With expertise in scalable web applications, I turn ideas into reality through clean, efficient code.
                        {/* Hello there! I'm Hitesh, a passionate Full-Stack Developer with a keen interest in crafting robust and innovative solutions. My journey in the world of programming has been filled with exciting challenges and continuous learning. I thrive on turning ideas into reality through clean and efficient code. */}
                        {/* <br /><br />
                        My expertise lies in building scalable web applications that deliver a seamless user experience. I am dedicated to staying current with the latest technologies and frameworks to ensure that my work meets the highest standards of quality and functionality.
                        <br /><br />
                        Let's embark on a journey together where we turn ideas into reality, create meaningful experiences, and push the boundaries of what's possible in the world of technology. */}
                    </p>
                    <button className='mt-4 text-[1.4rem] font-medium border-[1px] border-white p-[2px] rounded-full z-50 flex gap-[2px] backdrop-blur-md'>
                        <img className='my-auto h-[2.2rem] w-[2.2rem] p-[2px]  bg-white rounded-full border-[1px] object-cover' src={resume} alt="" />
                        <span className='mx-2'>Resume</span>
                    </button>
                </div>



                <div className='circle absolute bottom-0 h-[8rem] md:h-[15rem] w-full bg-gradient-to-b from-transparent to-[#000000] z-40'></div>
                <div className='absolute bottom-0 flex text-[5rem]  md:text-[10rem] h-[5.6rem]  md:h-[11.1rem] agap-4 cvc z-40 px-[2px] sm:px-[1rem] md-[2rem] cursor-default justify-between w-full'>
                    <span className='hover:mb-[2rem]'>H</span>
                    <span className='hover:mt-[2rem]'>V</span>
                    <span className='hover:mt-[2rem]'>i</span>
                    <span className='hover:mt-[2rem]'>s</span>
                    <span className='hover:mt-[2rem]'>u</span>
                    <span className='hover:mt-[2rem]'>a</span>
                    <span className='hover:mt-[2rem]'>l</span>
                </div>

            </div>

        </>
    )
}

export default Bannner
