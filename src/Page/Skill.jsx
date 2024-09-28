import data from "../data/skillData.json"
import gameLogo from "../assets/image/game_logo.png"

const moreProjectData = [
    {
        name: "NewsHub ",
        Github: "https://github.com/hiteshDhankhar01/NewsHub",
    },
    {
        name: "Todo app",
        Github: "https://github.com/hiteshDhankhar01/Todo.github.io",
    },
    {
        name: "Weather app",
        Github: "https://github.com/hiteshDhankhar01/Weather",
    }
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
                            className='m-4 h-[5rem] w-[5rem] atext-[${item.color}]  flex justify-center items-center flex-col gap-1 transform transition-transform duration-300 hover:-translate-y-1'
                            style={{ color: item.color }}>
                            <div className={`border-[1px]  p-4  rounded-full  bg-[#f8f8f806] 
                            ${item.id === 5 ? 'logoRound' : ''} `  }
                                style={{ borderColor: item.color }}
                            >
                                <img className={item.id === 3 ? 'py-2' : ''} src={item.icon} alt="404" />
                            </div>
                            <h3 className={`text-[${item.color}] `}>{item.name}</h3>
                        </div>
                    ))}

                </div>
                <div className='lg:w-1/2 abg-[#ffffff37] aasdf mn abg-[#000000] rounded-sm flex flex-col gap-4  text-white p-4 md:p-8 '>
                    <div className='relative'>
                        <h2 className='text-[1.4rem]  w-fit p-2 pl-6 '>More Projects</h2>
                        <div className='border-b borer-[1px] border-white absolute w-[12rem] md:w-[13rem] -left-4 md:-left-8'></div>
                    </div>

                    <div className='aasdf bgbutton  flex justify-between border-[1px] rounded-md p-2 items-center cursor-default'>
                        <h3 className='text-[1.2rem]  flex items-center '>
                            <img className="h-[2rem] border-full object-contain pr-2" src={gameLogo} alt="" />
                            Zombie killer
                            <span className="text-[1rem] px-2 glow">  Game </span>
                        </h3>
                        <div className=' flex gap-2 '>
                            <button className='bgc h-full  rounded-sm flex gap-2 p-1 px-4 text-[1.1rem]' >
                                <a href="https://zombie-killer.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    Play 🡥
                                </a>
                            </button>
                        </div>
                    </div>
                    {moreProjectData.map((item, index) => (
                        <div key={index} className='aasdf bgbutton  flex justify-between border-[1px] rounded-md'>
                            <h3 className='text-[1rem] p-2'>
                                {item.name}
                            </h3>
                            <div className=' flex gap-2 p-2'>
                                <button className='bgc h-full  rounded-sm flex gap-2 px-3 ' >
                                    <a href={item.Github} target="_blank" rel="noopener noreferrer">
                                    {`Code < >`}
                                    </a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skill
