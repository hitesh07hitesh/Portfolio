import codeIcon from '../assets/image/code.svg'
import Swiper from './Swiper/Swiper'
import Data from '../data/projectData.json'

const Project = () => {
    return (
        <div className='aw-full mt-8 relative'>

            <h2 className=' text-white text-[2rem] aml-6 border-b-[1px] border-white w-fit 
            px-2 pl-4'>Projects</h2>

            <div className='mt-[3rem] flex flex-col gap-[5rem] my-4'>
                {Data.map((item) => (
                    <div key={item.id} id={item.name} className='project_1 flex flex-col md:flex-row justify-between aw-full mx-2 md:mx-8'>
                        <div className='flex justify-center items-center md:w-1/2 relative'>
                            <img className='max-w-[28rem] w-full h-auto ah-[16rem] aw-[28rem] border-px aopacity-10 rounded-md ablur-[2px] opacity-50 border' src={item.image} alt="" />
                            <div className='text-'>
                            </div>
                        </div>
                        <div className='md:w-1/2 text-[#ffffffd4] my-4 aborder-2 p-2 flex flex-col item-center text-center gap-2 justify-center w-fit px-4'>
                            <h2 className='text-[1.5rem] border-b-[1px] mx-auto px-2 border-dashed w-fit'>{item.name}</h2>
                            <div className='text-[1.2rem] glow'>{item.tools}</div>
                            <div className='flex text-justify'>
                              {item.description}
                            </div>
                            <div className='flex justify-center flex-wrap mx-4 gap-2 sm:gap-10 mt-4'>
                                <div>
                                    <Swiper proj={item.name} />
                                </div>
                                <button className='w-[8rem] flex justify-center border-[1px] p-1 px-4 text-[1.2rem] transform transition-transform duration-300 hover:-translate-y-1  hover:bg-[#ffffff16] ' >
                                    <a className='flex item-center gap-2 items-center' href={item.Github} target="_blank" rel="noopener noreferrer">
                                        Code
                                        <img className="w-8 h-8" src={codeIcon} alt="" />
                                    </a>
                                </button>
                                <button className='w-[8rem] flex justify-center border-[1px] p-1 px-4 text-[1.2rem] transform transition-transform duration-300 hover:-translate-y-1  hover:bg-[#ffffff16] ' >
                                    <a className='flex item-center gap-2 items-center' href={item.Website} target="_blank" rel="noopener noreferrer">
                                        Live 🡥
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
