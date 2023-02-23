import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Bootstrap from '../assets/bootstrap.png';
import Sass from '../assets/sass.png';
import Tailwind from '../assets/tailwind.png';
import Git from '../assets/git.png';

const Skills = () => {
    return (
        <div name='skills' className=' w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        Skills
                    </p>
                    <p className='py-4'>
                        \\ These are the technologies I've worked with
                    </p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='pt-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img
                            className='w-20 mx-auto'
                            src={HTML}
                            alt='HTML icon'
                        />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='pt-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img
                            className='w-20 mx-auto'
                            src={Javascript}
                            alt='HTML icon'
                        />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='pt-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img
                            className='w-20 mx-auto'
                            src={ReactImg}
                            alt='HTML icon'
                        />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='pt-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img
                            className='w-20 mx-auto'
                            src={Git}
                            alt='HTML icon'
                        />
                        <p className='my-4'>GIT</p>
                    </div>
                    <div className='pt-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img
                            className='w-20 mx-auto'
                            src={CSS}
                            alt='HTML icon'
                        />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='pt-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img
                            className='w-20 mx-auto'
                            src={Sass}
                            alt='HTML icon'
                        />
                        <p className='my-4'>SASS</p>
                    </div>
                    <div className='pt-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img
                            className='w-20 mx-auto'
                            src={Tailwind}
                            alt='HTML icon'
                        />
                        <p className='my-4'>TAILWIND</p>
                    </div>
                    <div className='pt-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img
                            className='w-20 mx-auto'
                            src={Bootstrap}
                            alt='HTML icon'
                        />
                        <p className='my-4'>BOOTSTRAP</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
