import  { useState } from 'react'
import closeIcon from '../../assets/image/close.svg'
import gallaryIcon from '../../assets/image/image.svg'
import Slider from './Slider'


const Swiper = (props) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <div>
                <button className='border-[1px] p-1 px-4 text-[1.2rem]  hover:bg-[#ffffff16] flex items-center transform transition-transform duration-300 hover:-translate-y-1' onClick={() => setShow(!show)}>
                    Images
                    <img  src={gallaryIcon} alt="" />
                </button>

            </div>
            {show &&
                <div className="fixed inset-0 z-50 flex items-center justify-center text-lg ">
                <div className="absolute inset-0 backdrop-blur-md text-white font-bold" onClick={() => { setShow(false) }}></div>
                <div className="relative bg-opacity-50 abg-gray-800 p-2 sm:p-4  rounded z-40">
                    <button onClick={() => { setShow(false) }} className="absolute  -top-12 right-1/2  sm:top-8 sm:right-8 p-1 rounded-full text-white bg-[#00000057] z-50  backdrop-blur-sm">
                        <img src={closeIcon} alt="close" />
                    </button>
                    {/* swiper */}
                    <div className="">
                        <Slider project={props.proj}/>
                    </div>
                </div>
            </div>
            }


        </>
    )
}

export default Swiper
