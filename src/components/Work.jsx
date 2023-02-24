import Travel from '../assets/travelapp.jpg';
import Burger from '../assets/burgerapp.jpg';
import Colors from '../assets/colorsapp.jpg';
import Build from '../assets/buildapp.jpg';
import Tocha from '../assets/tochaapp.jpg';
import Defi from '../assets/defiapp.jpg';

const Work = () => {
    return (
        <div
            name='work'
            className='w-full md:h-screen text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Work
                    </p>
                    <p className='py-6'>\\ Check out some of my recent work</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${Travel})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-[250px] bg-cover bg-center bg-no-repeat hover:!bg-gradient-to-r from-cyan-500 to-blue-500'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                REACT JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a
                                    href='https://goldensand.onrender.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>
                                        Demo
                                    </button>
                                </a>
                                <a
                                    href='https://github.com/jackal7819/Golden-Sand'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${Burger})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-[250px] bg-cover bg-center bg-no-repeat hover:!bg-gradient-to-r from-cyan-500 to-blue-500'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                REACT JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a
                                    href='https://goldenburger.onrender.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>
                                        Demo
                                    </button>
                                </a>
                                <a
                                    href='https://github.com/jackal7819/Golden-Burger'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${Defi})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-[250px] bg-cover bg-center bg-no-repeat hover:!bg-gradient-to-r from-cyan-500 to-blue-500'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                REACT JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a
                                    href='https://crypto-z6sf.onrender.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>
                                        Demo
                                    </button>
                                </a>
                                <a
                                    href='https://github.com/jackal7819/Cryptocurrency'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${Colors})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-[250px] bg-cover bg-center bg-no-repeat hover:!bg-gradient-to-r from-cyan-500 to-blue-500'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a
                                    href='https://jackal7819.github.io/Colors/'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>
                                        Demo
                                    </button>
                                </a>
                                <a
                                    href='https://github.com/jackal7819/Colors'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${Tocha})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-[250px] bg-cover bg-center bg-no-repeat hover:!bg-gradient-to-r from-cyan-500 to-blue-500'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a
                                    href='https://jackal7819.github.io/Chat/'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>
                                        Demo
                                    </button>
                                </a>
                                <a
                                    href='https://github.com/jackal7819/Chat'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${Build})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-[250px] bg-cover bg-center bg-no-repeat hover:!bg-gradient-to-r from-cyan-500 to-blue-500'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a
                                    href='https://jackal7819.github.io/Building/'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>
                                        Demo
                                    </button>
                                </a>
                                <a
                                    href='https://github.com/jackal7819/Building'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
