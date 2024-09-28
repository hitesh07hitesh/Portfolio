import pic from '../assets/image/Hero-image.png'
import resume from '../assets/image/resume_icon.png'
import Contact from './Contact'

const Bannner = () => {
    return (
        <>
            <Contact />
            <div className='hero h-[500px] md:h-[500px] flex relative'>
                <img className='shadow  h-[31rem] aw-[18rem] absolute bottom-0 right-0 adrop-shadow-2xl mr-8 z-10' src={pic} alt="sfd" />
                <div className='mt-4 absolute px-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-1/4 md:left-1/4 acvc text-[1.5rem] sm:text-[2rem] font-extrabold text-white z-20 ap-4 md:ml-4 '>
                    <h2 className='leading-none'>Hi, I'm <span className='cvc font-bold'> Hitesh</span> </h2>
                    <h2 className='leading-none cvc'> Full-Stack Developer</h2>
                    <p className='text-[.8rem] w-[20rem] md:w-[25rem] mt-2'>
                        I'm a Full-Stack Developer passionate about crafting innovative solutions. With expertise in scalable web applications, I turn ideas into reality through clean, efficient code.
                    </p>
                    <button className='mt-4 text-[1.4rem] font-medium border-[1px] border-white p-[2px] rounded-full z-50 flex gap-[2px] backdrop-blur-md transition-transform duration-300 hover:translate-x-2 '>
                        <a className='flex items-center' href="https://drive.google.com/file/d/15w6-I8fAAEGO2DHSrMrqXq5Ai-Bg9JI-/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <img className='my-auto h-[2.2rem] w-[2.2rem] p-[2px]  bg-white rounded-full border-[1px] object-cover' src={resume} alt="" />
                            <span className='mx-2'>Resume</span>
                        </a>
                    </button>
                </div>
                <div className='circle absolute bottom-0 h-[8rem] md:h-[15rem] w-full bg-gradient-to-b from-transparent to-[#000000] z-40'></div>
                <div className='absolute bottom-0 flex text-[5rem]  md:text-[10rem] h-[5.6rem]  md:h-[11.1rem] agap-4 cvc z-40 px-[2px] sm:px-[1rem] md-[2rem] cursor-default justify-between w-full'>
                    <span className='w-full text-center'>H</span>
                    <span className='transform transition-transform duration-00 hover:-translate-y-[2rem] w-full text-center'>V</span>
                    <span className='transform transition-transform duration-00 hover:-translate-y-[2rem] w-full text-center'>i</span>
                    <span className='transform transition-transform duration-00 hover:-translate-y-[2rem] w-full text-center'>s</span>
                    <span className='transform transition-transform duration-00 hover:-translate-y-[2rem] w-full text-center'>u</span>
                    <span className='transform transition-transform duration-00 hover:-translate-y-[2rem] w-full text-center'>a</span>
                    <span className='transform transition-transform duration-00 hover:-translate-y-[2rem] w-full text-center'>l</span>
                </div>

            </div>

        </>
    )
}

export default Bannner
