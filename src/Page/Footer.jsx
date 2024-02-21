import { useState } from 'react'
import emailIcon from '../assets/image/mail.svg'
import linkedinIcon from '../assets/image/linkedin.svg'
import githubIcon from '../assets/image/github.svg'
import clipboardIcon from '../assets/image/clipboard.svg'



const Footer = () => {
    const [copybadge, setCopybadge] = useState(false)

    const copyEmail = () => {
        navigator.clipboard.writeText("hitesh01dhankhar@gmail.com")
        setCopybadge(true)
        setTimeout(() => {
            setCopybadge(false)
        }, 1000)
    }
    return (
        <div className='h-[170px] md:h-[100px] bgc flex justify-center md:px-16 px-6 text-white items-center relative mt-10 '>
            <div className='circle absolute top-0 aborder-2 h-[30px]  w-full bg-gradient-to-t from-transparent to-primaryColor z-20'></div>
            <div className='flex flex-col md:flex-row justify-between z-30 mt-4 w-full'>
                <button className="text-white flex items-center text-lg mb-4 md:mb-0 hover:text-blue-700  transform transition-transform duration-300 hover:-translate-y-1 ">
                    <a className='flex items-center' href="https://www.linkedin.com/in/hitesh-dhankhar" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="" className="w-6 h-6 mr-2" />
                        LinkedIn
                    </a>
                </button>

                <div className="flex items-center mb-4 md:mb-0">
                    <button className=' transform transition-transform duration-300 hover:-translate-y-1 '>
                        <a className="text-white flex items-center text-lg hover:text-blue-700" href="mailto:hitesh01dhankhar@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img src={emailIcon} alt="" className="w-6 h-6 mr-2" />
                            hitesh01dhankhar@gmail.com
                        </a>
                    </button>
                    <button className="text-white relative ml-2" onClick={copyEmail}>
                        <img src={clipboardIcon} alt="" className="w-5 h-5" />
                        {copybadge &&
                            <div className='bg-red-500 text-white px-2 rounded-md absolute -bottom-8 -right-5 ease-in-out delay-500 co'>copied!</div>}
                    </button>
                </div>
                <button className="text-white flex items-center text-lg hover:text-blue-700  transform transition-transform duration-300 hover:-translate-y-1 ">
                    <a className='flex items-center' href="https://github.com/hiteshDhankhar01" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="" className="w-6 h-6 mr-2" />
                        Github
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Footer
