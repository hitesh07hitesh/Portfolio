import React from 'react'
import htmlImg from '../assets/image/html.png'
import cssImg from '../assets/image/css.png'
import javaScriptImg from '../assets/image/JavaScript.png'
import reactImg from '../assets/image/react.png'
import nodeJsImg from '../assets/image/nodejs3.png'
import tailwindImg from '../assets/image/tailwind.png'
import reduxImg from '../assets/image/redux.png'
import mongodbImg from '../assets/image/mongodb.png'
import expressImg from '../assets/image/express.png'
import gitImg from '../assets/image/Git.png'

const data = [
    {
        id: 1,
        name: "HTML",
        color: "#ff5722",
        icon: htmlImg,
    },
    {
        id: 2,
        name: "CSS",
        color: "#3498db",
        icon: cssImg,
    },
    {
        id: 3,
        name: "Tailwind",
        color: "#38B2AC",
        icon: tailwindImg,
    },
    {
        id: 4,
        name: "JavaScript",
        color: "#fed93d",
        icon: javaScriptImg,
    },
    {
        id: 5,
        name: "React Js",
        color: "#02a2e4",
        icon: reactImg,
    },
    {
        id: 6,
        name: "Redux",
        color: "#764abc",
        icon: reduxImg,
    },
    {
        id: 7,
        name: "Node Js",
        color: "#8ac54a",
        icon: nodeJsImg,
    },
    {
        id: 8,
        name: "Express Js",
        color: "#fff",
        icon: expressImg,
    },
    {
        id: 9,
        name: "Mongo DB",
        color: "#429a35",
        icon: mongodbImg,
    },
    {
        id: 10,
        name: "Git",
        color: "#ef5033",
        icon: gitImg,
    },

]

const Skill = () => {
    return (
        <div className='aw-full mt-8 relative '>
            <h2 className=' text-white text-[2rem] aml-6 border-b-[1px] border-white w-fit 
            px-2 pl-6'>Skills</h2>
            <div className='flex flex-col lg:flex-row m-4 gap-10'>
                <div className='  border-[1px] lg:w-1/2 ah-[100px] p-4 flex gap-6 flex-wrap justify-center items-center cursor-default rounded-md h-fit '>

                    {data.map((item) => (
                        <div key={item.id}
                            className='m-4 h-[5rem] w-[5rem] atext-[${item.color}]  flex justify-center items-center flex-col gap-1 ease-in-out delay-50 hover:pb-4'
                            style={{ color: item.color }}>
                            <div className='border-[1px]  p-4  rounded-full  bg-[#f8f8f806]'
                                style={{ borderColor: item.color }}
                            >
                                <img className={item.id === 3 ? 'py-2' : ''} src={item.icon} alt="html" />
                            </div>
                            <h3 className={`text-[${item.color}] `}>{item.name}</h3>
                        </div>
                    ))}

                    {/* <div className="text-[#FFA500] border-[1px] border-[#FFA500] rounded-md w-fit px-2 flex items-center h-fit">
                        Git
                    </div> */}
                </div>
                <div className='lg:w-1/2 abg-[#ffffff37] aasdf mn abg-[#000000] rounded-sm flex flex-col gap-4  text-white p-4 md:p-8 '>
                    <div className='relative'>
                        <h2 className='text-[1.4rem]  w-fit p-2 pl-6 '>More Projects</h2>
                        <div className='border-b borer-[1px] border-white absolute w-[12rem] md:w-[13rem] -left-4 md:-left-8'></div>
                    </div>
                    <div className='aasdf bgbutton  flex justify-between border-[1px] rounded-md'>
                        <h3 className='text-[1rem] p-2'>
                            YouTube Playlist Analyzer
                        </h3>
                        <div className=' flex gap-2 p-2'>
                            <button className='bgc h-full px-2 rounded-sm'>{`Code </>`}</button>
                            <button className='bgc h-full px-2 rounded-sm'>{`Live ->`}</button>
                        </div>
                    </div>
                    <div className='aasdf bgbutton  flex justify-between border-[1px] rounded-md'>
                        <h3 className='text-[1rem] p-2'>
                            YouTube Playlist Analyzer
                        </h3>
                        <div className=' flex gap-2 p-2'>
                            <button className='bgc h-full px-2 rounded-sm'>{`Code </>`}</button>
                            <button className='bgc h-full px-2 rounded-sm'>{`Live ->`}</button>
                        </div>
                    </div>
                    <div className='aasdf bgbutton  flex justify-between border-[1px] rounded-md'>
                        <h3 className='text-[1rem] p-2'>
                            YouTube Playlist Analyzer
                        </h3>
                        <div className=' flex gap-2 p-2'>
                            <button className='bgc h-full px-2 rounded-sm'>{`Code </>`}</button>
                            <button className='bgc h-full px-2 rounded-sm'>{`Live 🡥`}</button>
                        </div>
                    </div>
                    <div className='aasdf bgbutton  flex justify-between border-[1px] rounded-md'>
                        <h3 className='text-[1rem] p-2'>
                            YouTube Playlist Analyzer
                        </h3>
                        <div className=' flex gap-2 p-2'>
                            <button className='bgc h-full px-2 rounded-sm'>{`Code < >`}</button>
                            <button className='bgc h-full px-2 rounded-sm'>{`Live ->`}</button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}


export default Skill
