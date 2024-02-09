import { useState } from 'react'
import closeIcon from '../assets/image/close.svg'
import emailIcon from '../assets/image/mail.svg'
import linkedinIcon from '../assets/image/linkedin.svg'
import githubIcon from '../assets/image/github.svg'
import phoneIcon from '../assets/image/phone.svg'


const Contact = () => {
    const [show, setShow] = useState(false)
    return (

        <>
            <span onClick={() => { setShow(!show) }}>
                <button className=' aabsolute fixed m-4 text-[1.5rem] font-medium border-[1px] border-white px-2 rounded-md h-fit text-white right-0 backdrop-blur-md z-50'> Contact
                </button>
            </span>
            {show &&
                <div className="fixed inset-0 z-50 flex items-center justify-center text-lg ">
                    <div className="absolute inset-0 backdrop-blur-md text-white font-bold" onClick={() => { setShow(false) }}></div>
                    <div className="relative bg-opacity-50 bg-gray-800 p-2 sm:p-4 max-w-lg rounded z-40 glowText">
                        <button onClick={() => { setShow(false) }} className="absolute  -top-12 right-1/2  sm:top-2 sm:right-2 p-1 rounded-full text-white bg-gray-700">
                            <img src={closeIcon} alt="close" />
                        </button>
                        <div className="flex flex-col sm:px-8 m-2 sm:m-8 gap-6">
                            <button className="text-white  flex items-center text-lg  border-b-[1px] border-white pb-2 border-dashed glowText">
                                <img src={linkedinIcon} alt="" className="w-6 h-6 mr-2" />
                                LinkedIn
                            </button>
                            <button className="text-white  flex items-center text-lg  border-b-[1px] border-white pb-2 border-dashed glowText">
                                <img src={githubIcon} alt="" className="w-6 h-6 mr-2" />
                                Github
                            </button>
                            <button className=' border-b-[1px] border-white pb-2 border-dashed pr-2'>
                                <a className="text-white flex items-center text-lg glowText" href="mailto:hitesh01dhankhar@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <img src={emailIcon} alt="" className="w-6 h-6 mr-2 " />
                                    hitesh01dhankhar@gmail.com
                                </a>
                            </button>
                            <button className=' border-b-[1px] border-white pb-2 border-dashed'>
                                <a className="text-white flex items-center glowText" href="tel:+9050457334">
                                    <img src={phoneIcon} alt="" className="w-6 h-6 mr-2" />
                                    9050457334
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Contact