import { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={Logo} alt='Logo' className='w-[80px] rounded-xl' />
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li className='hover:underline underline-offset-4'>Home</li>
                <li className='hover:underline underline-offset-4'>About</li>
                <li className='hover:underline underline-offset-4'>Skills</li>
                <li className='hover:underline underline-offset-4'>Work</li>
                <li className='hover:underline underline-offset-4'>Contact</li>
            </ul>

            {/* Hamburger */}
            <div
                onClick={handleClick}
                className='md:hidden z-10 cursor-pointer'>
                {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
            </div>

            {/* Mobile menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
                }>
                <li className='py-6 text-4xl hover:underline underline-offset-8'>
                    Home
                </li>
                <li className='py-6 text-4xl hover:underline underline-offset-8'>
                    About
                </li>
                <li className='py-6 text-4xl hover:underline underline-offset-8'>
                    Skills
                </li>
                <li className='py-6 text-4xl hover:underline underline-offset-8'>
                    Work
                </li>
                <li className='py-6 text-4xl hover:underline underline-offset-8'>
                    Contact
                </li>
            </ul>

            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a
                            href='https://www.linkedin.com/in/viktor-filippov-51a259241/'
                            target='_blank'
                            rel='noreferrer'
                            className='flex justify-between items-center w-full text-gray-300 ml-4'>
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a
                            href='https://github.com/jackal7819'
                            target='_blank'
                            rel='noreferrer'
                            className='flex justify-between items-center w-full text-gray-300 ml-4'>
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a
                            href='mailto:ask@jackal3166@gmail.com'
                            target='_blank'
                            rel='noreferrer'
                            className='flex justify-between items-center w-full text-gray-300 ml-4'>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a
                            href='https://jackal7819.github.io/Resume/'
                            target='_blank'
                            rel='noreferrer'
                            className='flex justify-between items-center w-full text-gray-300 ml-4'>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
