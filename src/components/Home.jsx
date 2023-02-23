import { TbArrowRightCircle } from 'react-icons/tb';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                    Viktor Filippov
                </h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                    I'm a Frontend Developer
                </h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                    I'm an enthusiastic and detail-oriented Frontend Developer
                    seeking an entry-level position with Company to use my
                    skills in coding, troubleshooting complex problems, and
                    assisting in the timely completion of projects.
                </p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                        View Work{' '}
                        <span className='group-hover:rotate-90 duration-300'>
                            <TbArrowRightCircle size={20} className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
