import Colors from '../assets/screen-colors.jpg';
import Cossack from '../assets/screen-cossack.webp';
import Nintendo from '../assets/screen-nintendo.webp';
import Cine from '../assets/screen-cine.webp';
import Liquid from '../assets/screen-liquid.jpg';
import Blog from '../assets/screen-blog.jpg';

const Work = () => {
    return (
        <div
            name='work'
            className='w-full text-gray-300 md:h-screen'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600'>
                        Work
                    </p>
                    <p className='py-6'>\\ Check out some of my recent work</p>
                </div>

                {/* Container */}
                <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${Cossack})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-[250px] bg-cover bg-center bg-no-repeat hover:!bg-gradient-to-r from-cyan-500 to-blue-500'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold tracking-wider text-white'>
                                REACT JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a
                                    href='https://cossack.onrender.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <button className='px-4 py-3 m-2 font-bold text-center text-gray-700 bg-white rounded-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a
                                    href='https://github.com/jackal7819/Cossack'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <button className='px-4 py-3 m-2 font-bold text-center text-gray-700 bg-white rounded-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${Nintendo})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-[250px] bg-cover bg-center bg-no-repeat hover:!bg-gradient-to-r from-cyan-500 to-blue-500'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold tracking-wider text-white'>
                                REACT JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a
                                    href='https://nintendo-store.onrender.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <button className='px-4 py-3 m-2 font-bold text-center text-gray-700 bg-white rounded-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a
                                    href='https://github.com/jackal7819/Nintendo-Store'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <button className='px-4 py-3 m-2 font-bold text-center text-gray-700 bg-white rounded-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${Cine})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-[250px] bg-cover bg-center bg-no-repeat hover:!bg-gradient-to-r from-cyan-500 to-blue-500'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold tracking-wider text-white'>
                                NEXT JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a
                                    href='https://imdb-clone-seven-roan.vercel.app/'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <button className='px-4 py-3 m-2 font-bold text-center text-gray-700 bg-white rounded-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a
                                    href='https://github.com/jackal7819/IMDB-Clone'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <button className='px-4 py-3 m-2 font-bold text-center text-gray-700 bg-white rounded-lg'>
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
                            <span className='text-2xl font-bold tracking-wider text-white'>
                                REACT JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a
                                    href='https://color-generator-2a9h.onrender.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <button className='px-4 py-3 m-2 font-bold text-center text-gray-700 bg-white rounded-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a
                                    href='https://github.com/jackal7819/Color-Generator'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <button className='px-4 py-3 m-2 font-bold text-center text-gray-700 bg-white rounded-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${Blog})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-[250px] bg-cover bg-center bg-no-repeat hover:!bg-gradient-to-r from-cyan-500 to-blue-500'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold tracking-wider text-white'>
                                REACT + NODE App
                            </span>
                            <div className='pt-8 text-center'>
                                <a
                                    href='https://blog-mauve-theta-33.vercel.app/'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <button className='px-4 py-3 m-2 font-bold text-center text-gray-700 bg-white rounded-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a
                                    href='https://github.com/jackal7819/Blog'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <button className='px-4 py-3 m-2 font-bold text-center text-gray-700 bg-white rounded-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${Liquid})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-[250px] bg-cover bg-center bg-no-repeat hover:!bg-gradient-to-r from-cyan-500 to-blue-500'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold tracking-wider text-white'>
                                REACT JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a
                                    href='https://liquid-lab.onrender.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <button className='px-4 py-3 m-2 font-bold text-center text-gray-700 bg-white rounded-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a
                                    href='https://github.com/jackal7819/Liquid-Lab'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <button className='px-4 py-3 m-2 font-bold text-center text-gray-700 bg-white rounded-lg'>
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
