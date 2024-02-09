import React from 'react'
import Project1 from '../assets/image/Project_1.png'
import Project2 from '../assets/image/Project_2.png'
import Project3 from '../assets/image/Project_3.png'
import Project4 from '../assets/image/Project_4.png'
import codeIcon from '../assets/image/code.svg'
import liveIcon from '../assets/image/live.svg'
import Swiper from './Swiper/Swiper'

const projectData = [
    {
        id: 1,
        name: "GreenGroccery",
        overview: "lorem33",
        image: Project1,
        tools: "Express, Stripe payment, Swiper, MongoDB ,Cloudnary",
        Github: "https://github.com/hitesh07hitesh/GreenGrocery_MERN",
        Website: "https://d"
    },
    {
        id: 2,
        name: "ChatWave",
        image: Project2,
        tools: "Socket.io Tailwain CSS, MongoDB, Node js, Express js",
        Github: "https://github.com/hitesh07hitesh/ChatWave",
        Website: "https://d"
    },
    {
        id: 3,
        name: "MovieFlix",
        image: Project3,
        tools: "MovieDB API, Redux, Tailwaind css",
        Github: "https://github.com/hitesh07hitesh/MovieFlix",
        Website: "https://movieflix-hvisual.netlify.app/"
    },
    {
        id: 4,
        name: "YouTube Playlist time Anylazer",
        image: Project4,
        tools: "Youtube Data API, Material ui",
        Github: "https://github.com/",
        Website: "https://yt-playlist-time-analyzer.netlify.app/"
    },
]

const Project = () => {
    return (
        <div className='aw-full mt-8 relative'>

            <h2 className=' text-white text-[2rem] aml-6 border-b-[1px] border-white w-fit 
            px-2 pl-4'>Projects</h2>

            <div className='mt-[3rem] flex flex-col gap-[5rem] my-4'>
                {projectData.map((item) => (
                    <div key={item.id} className='project_1 flex flex-col md:flex-row justify-between aw-full mx-2 md:mx-8'>
                        <div className='flex justify-center items-center md:w-1/2 relative cursor-pointer'>
                            <img className='max-w-[28rem] w-full h-auto ah-[16rem] aw-[28rem] border-px aopacity-10 rounded-md ablur-[2px] opacity-50 agrayscale-[30%]   hover:opacity-100 ease-in-out delay-100' src={item.image} alt="" />
                            <button 
                            // className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white border-[1px] p-1 px-4 backdrop-blur-md flex items-center gap-2'
                            >
                                {/* Gallary */}
                                 <Swiper/>
                                {/* <img  src={gallaryIcon} alt="" /> */}
                            </button>
                        </div>
                        <div className='md:w-1/2 text-[#ffffffd4] my-4 aborder-2 p-2 flex flex-col item-center text-center gap-2 justify-center w-fit px-4'>
                            <h2 className='text-[1.5rem] border-b-[1px] mx-auto px-2 border-dashed w-fit'>{item.name}</h2>
                            <div className='text-[1.2rem]'>{item.tools}</div>
                            <div className='flex'>
                                Overview: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis veritatis doloremque accusamus facere, ducimus, quos voluptate sequi similique voluptatum, cum aspernatur suscipit sed.
                            </div>
                            <div className='flex justify-center mx-4 gap-20 mt-4'>
                                <button className='border-[1px] p-1 px-4 text-[1.2rem] transition ease-in-out delay-150  ' >
                                    <a className='flex item-center gap-2 items-center' href={item.Github} target="_blank" rel="noopener noreferrer">
                                        Code
                                        <img className="w-8 h-8" src={codeIcon} alt="" />
                                    </a>
                                </button>
                                <button className='border-[1px] p-1 px-4 text-[1.2rem]  '  >
                                    <a className='flex item-center gap-2 items-center' href={item.Website} target="_blank" rel="noopener noreferrer">
                                        Live
                                        <img className="w-8 h-8"  src={liveIcon} alt="" />
                                    </a>
                                </button>
                            </div>
                            {/* HTML,CSS,JS */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project
